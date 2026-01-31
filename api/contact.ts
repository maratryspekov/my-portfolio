import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { config as dotenvConfig } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenvConfig({ path: ".env.local" });
}

/* helpers*/

function json(res: VercelResponse, status: number, data: unknown) {
  res
    .status(status)
    .setHeader("Content-Type", "application/json")
    .send(JSON.stringify(data));
}

function escapeHtml(str = "") {
  return String(str).replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        m
      ]!,
  );
}

const ALLOWED_ORIGINS = new Set([
  "http://localhost:3000",
  process.env.PUBLIC_ORIGIN || "",
]);

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = String(req.headers.origin || "");
  if (origin && (ALLOWED_ORIGINS.has(origin) || ALLOWED_ORIGINS.has(""))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

/* handler*/

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST")
    return json(res, 405, { ok: false, error: "Method not allowed" });

  const { name, email, subject, message, company } = (req.body || {}) as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    company?: string;
  };

  if (company && company.trim().length) return json(res, 200, { ok: true });

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || name.trim().length < 2)
    return json(res, 400, { ok: false, error: "Name is required" });
  if (!email || !emailRe.test(email))
    return json(res, 400, { ok: false, error: "Valid email is required" });
  if (!message || message.trim().length < 10)
    return json(res, 400, { ok: false, error: "Message is too short" });
  if ((subject || "").length > 120)
    return json(res, 400, { ok: false, error: "Subject too long" });
  if (message.length > 2000)
    return json(res, 400, { ok: false, error: "Message is too long" });

  try {
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465 || String(process.env.SMTP_SECURE) === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.TO_EMAIL;
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER;
    if (!to || !from)
      return json(res, 500, {
        ok: false,
        error: "Missing TO_EMAIL/FROM_EMAIL env",
      });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${from}>`,
      to,
      replyTo: email,
      subject: `New message from ${escapeHtml(name)}${
        subject ? ` — ${escapeHtml(subject)}` : ""
      }`,
      text: `From: ${name} <${email}>\nSubject: ${
        subject || "(no subject)"
      }\n\n${message}`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
          <p><b>From:</b> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><b>Subject:</b> ${escapeHtml(subject || "(no subject)")}</p>
          <hr/>
          <pre style="white-space:pre-wrap;margin:0">${escapeHtml(
            message,
          )}</pre>
        </div>
      `,
    });

    return json(res, 200, { ok: true });
  } catch (err: unknown) {
    const error = err as {
      code?: string;
      message?: string;
      response?: unknown;
    };
    console.error("sendMail error:", {
      code: error.code,
      msg: error.message,
      response: error.response,
    });
    return json(res, 500, { ok: false, error: "Mail service error" });
  }
}

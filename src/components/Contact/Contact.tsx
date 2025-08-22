import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import s from "./Contact.module.scss";
import Section from "../Section/Section";
import Input from "../../ui/Input/Input";
import AnimatedButton from "../../ui/AnimatedButton/AnimatedButton";
import AnimatedLetters from "../../ui/AnimatedLetters/AnimatedLetters";

mapboxgl.accessToken =
  import.meta.env.VITE_MAPBOX_TOKEN || "YOUR_MAPBOX_ACCESS_TOKEN";

export default function Contact() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);

  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
    });
    mapInstance.current = map;

    map.on("load", () => {
      // 1) показать Германию целиком
      const germanyBounds: mapboxgl.LngLatBoundsLike = [
        [5.8663153, 47.2701114], // SW
        [15.0419319, 55.058347], // NE
      ];
      map.fitBounds(germanyBounds, {
        padding: { top: 24, right: 24, bottom: 24, left: 24 },
        duration: 700,
      });

      // 2) пин в центре Берлина
      const berlin: [number, number] = [13.404954, 52.520008];
      const el = document.createElement("div");
      const img = document.createElement("img");
      img.alt = "Berlin";
      img.src = new URL(
        "../../assets/images/image-geotag.png",
        import.meta.url
      ).href;
      img.className = s.contact_map_img;
      el.appendChild(img);

      new mapboxgl.Marker({ element: el, anchor: "bottom" })
        .setLngLat(berlin)
        .addTo(map);

      // на всякий случай после первого рендера
      map.resize();
    });

    // --- поддержка корректного ресайза карты ---
    // 1) если контейнер меняет размеры (или возвращается из display:none)
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && mapRef.current) {
      ro = new ResizeObserver(() => map.resize());
      ro.observe(mapRef.current);
    }

    // 2) при смене брейкпоинта 1023px (когда мы скрываем/показываем .contact_map)
    const mql = window.matchMedia("(max-width: 1023px)");
    const onBPChange = () => {
      // дождаться применения CSS и перерисовать
      requestAnimationFrame(() => map.resize());
    };
    if (mql.addEventListener) mql.addEventListener("change", onBPChange);
    else mql.addListener(onBPChange); // старые браузеры

    // 3) общий ресайз окна/ориентации
    const onWinResize = () => map.resize();
    window.addEventListener("resize", onWinResize);
    window.addEventListener("orientationchange", onWinResize);

    return () => {
      ro?.disconnect();
      if (mql.removeEventListener)
        mql.removeEventListener("change", onBPChange);
      else mql.removeListener(onBPChange);
      window.removeEventListener("resize", onWinResize);
      window.removeEventListener("orientationchange", onWinResize);

      map.remove();
      mapInstance.current = null;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot: hidden area, bots fill this
    if ((data.get("company") as string)?.trim().length) {
      setStatus("sent");
      form.reset();
      return;
    }

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
      company: String(data.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrMsg(json?.error || "Failed to send");
      }
    } catch (err) {
      setStatus("error");
      setErrMsg("Network error");
    }
  }

  return (
    <Section className={s.contact_section} id="contact">
      <div className={s.contact}>
        <form className={s.contact_form} onSubmit={handleSubmit} noValidate>
          <h2 className={s.contact_title}>
            <AnimatedLetters
              text="Contact me"
              effect="zoom-in"
              startDelay={0}
              step={45}
              waveOnHover={false}
            />
          </h2>

          {/* honeypot, hidden area */}
          <input
            type="text"
            name="company"
            autoComplete="off"
            tabIndex={-1}
            style={{ display: "none" }}
            aria-hidden="true"
          />

          <div className={s.contact_form_group}>
            <Input
              className={s.contact_form_input}
              type="text"
              name="name"
              placeholder="Your name *"
              required
            />
            <Input
              className={`${s.contact_form_input} ${s.contact_form_input_email}`}
              type="email"
              name="email"
              placeholder="Your email *"
              required
            />
          </div>

          <Input
            className={s.contact_form_input}
            type="text"
            name="subject"
            placeholder="Subject (optional)"
          />

          <textarea
            className={s.contact_form_input}
            name="message"
            placeholder="Message *"
            required
          />

          <div className={s.contact_form_send_block}>
            <p className={s.text_muted}>
              Or email me directly at
              <br />
              <a
                href="mailto:marat.ryspekoff@gmail.com"
                className={s.accent_link}
              >
                marat.ryspekoff@gmail.com
              </a>
            </p>

            <a
              href="mailto:marat.ryspekoff@gmail.com"
              className={`${s.accent_link} ${s.small_screen}`}
            >
              marat.ryspekoff@gmail.com
            </a>

            <AnimatedButton
              className={s.animated_button}
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending..."
                : status === "sent"
                ? "Sent!"
                : "Send"}
            </AnimatedButton>
          </div>

          {status === "error" && <p style={{ color: "#f66" }}>{errMsg}</p>}
          {status === "sent" && (
            <p style={{ color: "#08fdd8" }}>
              Thanks! I’ll get back to you soon.
            </p>
          )}
        </form>

        <div className={s.contact_map} ref={mapRef} />
      </div>
    </Section>
  );
}

# Marat Ryspekov Portfolio

Personal portfolio website built with **React**, **TypeScript**, **Vite**, and **SCSS**.

Includes animated sections, a project gallery, a Mapbox map, and a serverless contact form.

Live: https://marat-portfolio.vercel.app

## Features

- Responsive layout (mobile → desktop)
- Smooth animations (AOS / Framer Motion)
- Serverless Contact Form (Vercel Function + Nodemailer)
- Mapbox GL interactive map
- Project gallery & skills sections
- Clean, modular SCSS with CSS Modules
- Deployed on Vercel

## Technologies

- React + TypeScript
- Vite (build/dev)
- SCSS Modules
- React Router
- AOS, Framer Motion
- Mapbox GL JS
- Nodemailer (via Vercel serverless function)

## Getting Started

Clone the repository and install dependencies:

```sh
git clone https://github.com/Marat-Vodochka/my-portfolio.git
cd my-portfolio
npm install
```

Run the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

## Environment Variables

Create a .env.local in the project root for local development:

# Mapbox (frontend, exposed to client)

VITE_MAPBOX_TOKEN=your_public_mapbox_token

# Email (used only by the serverless function)

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com

## Project Structure

my-portfolio/
├─ api/
│ └─ contact.ts # Vercel Serverless Function (/api/contact)
├─ public/
│ ├─ favicon.png
│ ├─ favicon-white.png
│ └─ image-geotag.png
├─ src/
│ ├─ assets/ # images & icons
│ ├─ components/ # sections: About, BaseLayout, Contact, Hero, NavMenu, Portfolio, Section, Skills…
│ ├─ ui/ # reusable UI components (AnimatedButton, AnimatedLetters, Input)
│ ├─ App.tsx
│ ├─ main.tsx
│ ├─ App.css
│ ├─ index.css
│ └─ global.d.ts # global types/declarations
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
└─ .env.local # local env vars (do NOT commit)

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "typecheck": "tsc --noEmit",
  "lint": "eslint ."
}
```

## Contact

Feel free to reach out via the contact form or email:  
[marat.ryspekoff@gmail.com](mailto:marat.ryspekoff@gmail.com)

---

Portfolio by Marat Ryspekov

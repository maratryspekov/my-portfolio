# 🚀 Marat Ryspekov - Frontend Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=vercel)](https://marat-portfolio.vercel.app)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI](https://github.com/maratryspekov/my-portfolio/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/maratryspekov/my-portfolio/actions/workflows/ci.yml)

A modern, responsive portfolio website showcasing my projects and skills as a Frontend Developer. Built with performance and user experience in mind.

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
git clone https://github.com/maratryspekov/my-portfolio.git
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

src/
├── components/ # React components (sections)
├── ui/ # Reusable UI components
├── assets/ # Images and icons
├── App.tsx # Main application component
├── main.tsx # Application entry point
└── \*.css Global styles
api/
└── contact.ts # Vercel serverless function

## 📜 Available Scripts

npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build

npm run typecheck - Run TypeScript compiler

npm run lint - Run ESLint

## 🌐 Live Deployment

The portfolio is deployed on Vercel and available at:
👉 https://ryspekoff.de

## 📫 Contact Me

📫 Contact: via **[LinkedIn](https://www.linkedin.com/in/marat-ryspekov-231297221/)** or **[Portfolio](https://ryspekoff.de/)**.

Portfolio by Marat Ryspekov

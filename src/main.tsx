import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import App from "./App.tsx";
import spriteUrl from "./assets/icons/sprite.svg";

fetch(spriteUrl)
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const svg = parser.parseFromString(data, "image/svg+xml").documentElement;
    svg.style.display = "none";
    document.body.insertBefore(svg, document.body.firstChild);
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

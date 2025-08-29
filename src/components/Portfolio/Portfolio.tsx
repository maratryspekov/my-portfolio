import s from "./Portfolio.module.scss";
import Section from "../Section/Section";
import MarusyaLogo from "../../assets/images/icon-marusya.svg";

export default function Portfolio() {
  return (
    <Section className={s["portfolio-section"]} id="portfolio">
      <div className={s.portfolio}>
        <div className={s["portfolio__heading"]}>
          <h2 className={s["portfolio__title"]}>My Portfolio</h2>
          <p className={s["portfolio__description"]}>
            Here is a small gallery of my recent projects.
            <p>
              Interested to know more about my work?&nbsp;
              <a href="#contact" className={s["accent__link"]}>
                Contact me!
              </a>
            </p>
          </p>
        </div>
        <div className={s["portfolio__cards"]}>
          <a
            className={s["portfolio__cards-item"]}
            href="https://cinema-guide-marusya.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${s["portfolio__cards-item-img"]} ${s.marusya}`}
              src={MarusyaLogo}
              alt="Marusya cinema guide"
            />
            <div className={s["portfolio__cards-item-description"]}>
              <h1>Marusya</h1>
              <p>Cinema Guide</p>
            </div>
          </a>
          <a
            className={s["project__cards-item"]}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Project 2
          </a>
          <a
            className={s["project__cards-item"]}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Project 3
          </a>
        </div>
      </div>
    </Section>
  );
}

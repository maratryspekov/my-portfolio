import s from "./Portfolio.module.scss";
import Section from "../Section/Section";

export default function Portfolio() {
  return (
    <Section className={s["portfolio-section"]} id="portfolio">
      <div className={s.portfolio}>
        <div className={s["portfolio__heading"]}>
          <h2 className={s["portfolio__title"]}>My Portfolio</h2>
          <p className={s["portfolio__description"]}>
            Here is a small gallery of my recent projectscts.
            <span className="">
              Interested to know more about my work?
              <a href="#contact" className="accent__link">
                Contact me!
              </a>
            </span>
          </p>
        </div>
        <div className={s["portfolio__projects"]}>
          <a
            className={s["project__cards-item"]}
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Project 1
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

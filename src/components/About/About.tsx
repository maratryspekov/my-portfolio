import s from "./About.module.scss";
import myMemoji from "../../assets/images/image-aboutme.PNG";
import Section from "../Section/Section";
import AnimatedLetters from "../../ui/AnimatedLetters/AnimatedLetters";

export default function About() {
  return (
    <Section className={s["about-section"]} id="about">
      <div className={s.about}>
        <div className={s["about__info"]}>
          <h2 className={s["about__title"]}>
            <AnimatedLetters
              text="About Me"
              effect="zoom-in"
              startDelay={0}
              step={45}
              waveOnHover={false}
            />
          </h2>

          <p className={s["about__text"]}>
            Hello! My name is Marat and I am a Frontend Developer currently
            based in Berlin, Germany 🇩🇪
          </p>
          <p className={s["about__text"]}>
            I specialize in building good-looking and reliable front-end for
            different services and applications.
          </p>
        </div>

        <div className={s["about__image"]}>
          <img src={myMemoji} alt="Marat portrait" loading="lazy" />
        </div>
      </div>
    </Section>
  );
}

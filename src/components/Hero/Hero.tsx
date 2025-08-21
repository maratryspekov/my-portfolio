import s from "./Hero.module.scss";
import Section from "../Section/Section";
import AnimatedButton from "../../ui/AnimatedButton/AnimatedButton";
import AnimatedLetters from "../../ui/AnimatedLetters/AnimatedLetters";
import scrollDown from "../../assets/images/image-scroll-down.png";

export default function Hero() {
  return (
    <Section className={s["intro-section"]} id="home">
      <div className={s.intro}>
        <h1
          className={`${s["intro__header"]} ${s["intro__header__first-line"]}`}
        >
          <AnimatedLetters text="Hi," startDelay={0} step={50} />
        </h1>
        <h1
          className={`${s["intro__header"]} ${s["intro__header__second-line"]}`}
        >
          <AnimatedLetters
            text="I'm Marat,"
            startDelay={300}
            step={50}
            highlightChar="M"
            highlightOccurrence={2}
          />
        </h1>
        <h1
          className={`${s["intro__header"]} ${s["intro__header__third-line"]}`}
        >
          <AnimatedLetters text="Web Developer" startDelay={700} step={50} />
        </h1>
        <p
          className={s["intro__description"]}
          data-aos="fade-down"
          data-aos-delay="2200"
          data-aos-duration="500"
        >
          Frontend Developer / React Specialist
        </p>
        <div
          className={s["intro__contact"]}
          data-aos="fade-down"
          data-aos-delay="1500"
          data-aos-duration="500"
        >
          <a href="#contact">
            <AnimatedButton className={s["intro__contact-button"]}>
              Reach me
            </AnimatedButton>
          </a>
        </div>
        <a className={s["intro__scroll"]} href="#about">
          <img src={scrollDown} alt="scroll down" />
          <span></span>
        </a>
      </div>
    </Section>
  );
}

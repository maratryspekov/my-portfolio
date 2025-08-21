import s from "./Skills.module.scss";
import imgSkills from "../../assets/images/images-skills.png";
import Section from "../Section/Section";
import AnimatedLetters from "../../ui/AnimatedLetters/AnimatedLetters";

import iconHTML from "../../assets/icons/icon-html.svg";
import iconCSS from "../../assets/icons/icon-css.svg";
import iconJS from "../../assets/icons/icon-js.svg";
import iconSASS from "../../assets/icons/icon-sass.svg";
import iconReact from "../../assets/icons/icon-react.svg";
import iconRedux from "../../assets/icons/icon-redux.svg";
import iconTS from "../../assets/icons/icon-ts.svg";
import iconGit from "../../assets/icons/icon-git copy.svg";
import iconAgile from "../../assets/icons/icon-ajile.svg";
import iconVite from "../../assets/icons/icon-vite.svg";
import iconConfluence from "../../assets/icons/icon-confluence.svg";
import iconNodeJS from "../../assets/icons/icon-nodejs.svg";
import iconMongoDB from "../../assets/icons/icon-mongodb.png";

export default function Skills() {
  return (
    <Section className={s["skills-section"]} id="skills">
      <div className={s.skills}>
        <div className={s["skills__info"]}>
          <div className={s["skills__heading"]}>
            <h2 className={s["skills__title"]}>
              <AnimatedLetters
                text="My Skills"
                effect="zoom-in"
                startDelay={0}
                step={45}
                waveOnHover={false}
              />
            </h2>

            <p className={s["skills__description"]}>
              As&nbsp;a&nbsp;Junior Frontend Developer, I&nbsp;work with modern
              JavaScript and frameworks like React to&nbsp;build interactive and
              responsive web applications. I&nbsp;focus on&nbsp;writing clean,
              maintainable code while following best practices in&nbsp;HTML,
              CSS, and JavaScript. I&nbsp;actively learn new technologies and
              tools, such as&nbsp;state management (Redux, Zustand), component
              libraries, and build tools (Webpack, Vite). I&nbsp;pay attention
              to&nbsp;performance optimization, accessibility, and cross-browser
              compatibility.
            </p>
          </div>

          <div className={s["skills__cards"]}>
            {/* Card 1 */}
            <div
              className={s["skills__card"]}
              data-aos="flip-up"
              data-aos-delay="0"
              data-aos-duration="800"
            >
              <h3 className={s["skills__card-heading"]}>
                <AnimatedLetters
                  text="Basics"
                  effect="zoom-in"
                  startDelay={250} // start after cards flip animation
                  step={40}
                  waveOnHover={false}
                />
              </h3>
              <ul className={s["skills__card-list"]}>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconHTML}
                    alt="HTML"
                  />
                  <p className={s["skills__card-item-name"]}>HTML</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="80"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconCSS}
                    alt="CSS"
                  />
                  <p className={s["skills__card-item-name"]}>CSS</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="160"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconJS}
                    alt="JavaScript"
                  />
                  <p className={s["skills__card-item-name"]}>JavaScript</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="240"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconSASS}
                    alt="SASS"
                  />
                  <p className={s["skills__card-item-name"]}>SASS</p>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div
              className={s["skills__card"]}
              data-aos="flip-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <h3 className={s["skills__card-heading"]}>
                <AnimatedLetters
                  text="Script"
                  effect="zoom-in"
                  startDelay={350}
                  step={40}
                  waveOnHover={false}
                />
              </h3>
              <ul className={s["skills__card-list"]}>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconReact}
                    alt="React"
                  />
                  <p className={s["skills__card-item-name"]}>React JS</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="80"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconRedux}
                    alt="Redux"
                  />
                  <p className={s["skills__card-item-name"]}>Redux</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="160"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconTS}
                    alt="TypeScript"
                  />
                  <p className={s["skills__card-item-name"]}>TypeScript</p>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div
              className={s["skills__card"]}
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <h3 className={s["skills__card-heading"]}>
                <AnimatedLetters
                  text="Workflow"
                  effect="zoom-in"
                  startDelay={450}
                  step={40}
                  waveOnHover={false}
                />
              </h3>
              <ul className={s["skills__card-list"]}>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconGit}
                    alt="Git"
                  />
                  <p className={s["skills__card-item-name"]}>Git</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="80"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconAgile}
                    alt="Agile"
                  />
                  <p className={s["skills__card-item-name"]}>Agile</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="160"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconVite}
                    alt="Vite"
                  />
                  <p className={s["skills__card-item-name"]}>Vite</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="240"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconConfluence}
                    alt="Confluence"
                  />
                  <p className={s["skills__card-item-name"]}>Confluence</p>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div
              className={s["skills__card"]}
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <h3 className={s["skills__card-heading"]}>
                <AnimatedLetters
                  text="Backend"
                  effect="zoom-in"
                  startDelay={550}
                  step={40}
                  waveOnHover={false}
                />
              </h3>
              <ul className={s["skills__card-list"]}>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconNodeJS}
                    alt="Node.js"
                  />
                  <p className={s["skills__card-item-name"]}>Node.js</p>
                </li>
                <li
                  className={s["skills__card-item"]}
                  data-aos="zoom-in"
                  data-aos-delay="80"
                >
                  <img
                    className={s["skills__card-item-icon"]}
                    src={iconMongoDB}
                    alt="MongoDB"
                  />
                  <p className={s["skills__card-item-name"]}>MongoDB</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s["skills__img"]}>
          <img src={imgSkills} alt="Skills" width={269} height={264} />
        </div>
      </div>
    </Section>
  );
}

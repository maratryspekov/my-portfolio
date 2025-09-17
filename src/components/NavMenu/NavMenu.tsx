import { useState } from "react";
import s from "./NavMenu.module.scss";

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`${s["main-menu"]} ${
          isMenuOpen ? s["main-menu--active"] : ""
        }`}
      >
        <div className={s["main-menu__burger"]} onClick={toggleMenu}>
          <span />
        </div>
        <div
          className={`${s["main-menu__burger-background"]} ${
            isMenuOpen ? s["main-menu__burger-background--active"] : ""
          }`}
          onClick={closeMenu}
        />

        <div className={s["main-menu__top"]}>
          <a className={s["logo"]} href="#home" onClick={closeMenu}>
            <div className={s["main-menu__top-img"]} />
          </a>
        </div>

        <div className={s["main-menu__navigation"]}>
          <a
            className={s["main-menu__navigation-item"]}
            href="#home"
            data-name="Home"
            onClick={closeMenu}
          >
            <svg width="24" height="24">
              <use href="#icon-home" />
            </svg>
            <p>Home</p>
          </a>
          <a
            className={s["main-menu__navigation-item"]}
            href="#about"
            data-name="About"
            onClick={closeMenu}
          >
            <svg width="24" height="24">
              <use href="#icon-about" />
            </svg>
            <p>About</p>
          </a>
          <a
            className={s["main-menu__navigation-item"]}
            href="#skills"
            data-name="Skills"
            onClick={closeMenu}
          >
            <svg width="24" height="24">
              <use href="#icon-skills" />
            </svg>
            <p>Skills</p>
          </a>
          <a
            className={s["main-menu__navigation-item"]}
            href="#portfolio"
            data-name="Work"
            onClick={closeMenu}
          >
            <svg width="24" height="24">
              <use href="#icon-work" />
            </svg>
            <p>Work</p>
          </a>
          <a
            className={s["main-menu__navigation-item"]}
            href="#contact"
            data-name="Contact"
            onClick={closeMenu}
          >
            <svg width="24" height="24">
              <use href="#icon-contact" />
            </svg>
            <p>Contact</p>
          </a>
        </div>

        <div className={s["main-menu__links"]}>
          <div className={s["main-menu__links-item"]}>
            <a
              href="https://www.linkedin.com/in/marat-ryspekov-231297221/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <div className={`${s["hexagon"]} ${s["linkedin-link"]}`}>
                <svg width="11" height="11">
                  <use href="#icon-linkedin" />
                </svg>
              </div>
            </a>
          </div>
          <div className={s["main-menu__links-item"]}>
            <a
              href="https://github.com/maratryspekov"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <div className={`${s["hexagon"]} ${s["github-link"]}`}>
                <svg width="11" height="11">
                  <use href="#icon-git" />
                </svg>
              </div>
            </a>
          </div>
          <div className={s["main-menu__links-item"]}>
            <a
              href="https://www.instagram.com/marat_vodochka/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <div className={`${s["hexagon"]} ${s["instagram-link"]}`}>
                <svg width="13" height="13">
                  <use href="#icon-instagram" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;

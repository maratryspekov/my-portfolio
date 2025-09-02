import { type ReactNode } from "react";
import NavMenu from "../NavMenu/NavMenu";
import s from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <NavMenu />
      <main className={s.container}>
        <a href="/Marat_Ryspekov_CV.pdf" target="_blank" rel="noreferrer">
          <div className={s["cv-link"]}>
            <p>View My CV</p>
          </div>
        </a>

        {children}
      </main>
    </>
  );
}

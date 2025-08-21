import { type ReactNode } from "react";
import s from "./Section.module.scss";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={`${s.section} ${className}`} id={id}>
      {children}
    </section>
  );
}

export default Section;

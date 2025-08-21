// src/ui/AnimatedLetters/AnimatedLetters.tsx
import { useMemo } from "react";
import s from "./AnimatedLetters.module.scss";

type Props = {
  text: string;
  effect?: "zoom-in" | "fade-up" | "fade-down" | "flip-up" | string;
  startDelay?: number;
  step?: number;
  duration?: number;
  easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | string;
  waveOnHover?: boolean;
  highlightChar?: string; // какую букву подсвечивать
  highlightOccurrence?: number; // какое по счёту вхождение (1 = первое). Если не задано — подсвечиваются все
};

export default function AnimatedLetters({
  text,
  effect = "zoom-in",
  startDelay = 0,
  step = 60,
  duration = 400,
  easing = "ease",
  waveOnHover = true,
  highlightChar,
  highlightOccurrence, // <— новый проп
}: Props) {
  const letters = useMemo(() => text.split(""), [text]);

  // счётчик вхождений искомой буквы
  let occ = 0;

  return (
    <span className={waveOnHover ? s.word : undefined} aria-label={text}>
      {letters.map((ch, i) => {
        const isSpace = ch === " ";

        // сравниваем без учёта регистра
        const matchesChar =
          !!highlightChar && ch.toLowerCase() === highlightChar.toLowerCase();

        // если highlightOccurrence не задан — подсвечиваем все совпадения,
        // если задан — только n-е по счёту
        const shouldHighlight = matchesChar
          ? highlightOccurrence == null
            ? true
            : ++occ === highlightOccurrence
          : false;

        return (
          <span
            key={i}
            className={`${s.letter} ${shouldHighlight ? s.highlight : ""}`}
            data-aos={effect}
            data-aos-delay={startDelay + i * step}
            data-aos-duration={duration}
            data-aos-easing={easing}
            style={{ ["--i" as any]: i } as React.CSSProperties}
          >
            {isSpace ? "\u00A0" : ch}
          </span>
        );
      })}
    </span>
  );
}

// SplitText.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitText({
  text,
  tag = "h1",
  className = "",
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  delay = 0.05, // delay entre letras em segundos
  duration = 0.6,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll(".split-letter");
    gsap.fromTo(
      letters,
      { ...from },
      {
        ...to,
        duration,
        stagger: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%", // quando entrar na tela
          toggleActions: "play none none reset", // permite repetir
        },
      }
    );
  }, []);

  const Tag = tag;

  return (
    <Tag ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="split-letter inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitText({
  text,
  tag = "h1",
  className = "",
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  delay = 0.05,
  duration = 0.6,
  ease = "power3.out",
  gradient = false,
}) {
  const ref = useRef(null);
  const Tag = tag;

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const letters = ref.current.querySelectorAll(".split-letter");

      gsap.fromTo(
        letters,
        { ...from },
        {
          ...to,
          duration,
          stagger: delay,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%", // quando entrar na tela
            toggleActions: "play reverse play reverse", // **modificado aqui**
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [text]);

  return (
    <Tag
      ref={ref}
      className={`
        inline-block
        ${gradient ? "bg-clip-text text-transparent" : ""}
        ${className}
      `}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="split-letter inline-block"
          style={{
            background: gradient ? "inherit" : "none",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}


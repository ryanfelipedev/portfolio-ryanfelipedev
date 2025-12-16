import { Button } from "@heroui/button";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dot({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -6 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
          }}
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            text-[#6734de] text-lg leading-none
          "
        >
          •
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `relative pl-4 transition cursor-pointer
     ${
       activeSection === id
         ? "text-[#6734de]"
         : "text-white hover:text-[#6734de]"
     }`;

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <nav className="w-[65%] mx-auto px-3 py-2 flex items-center justify-between rounded-full bg-transparent backdrop-blur-sm">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 ml-10">
          <svg
            className="w-10 h-10 text-rose-700 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>

          <div className="flex flex-col items-start">
            <TypographyH4 className="text-[#e0e1dd] !leading-none">
              Ryan Felipe
            </TypographyH4>
            <TypographyP className="text-gray-400 text-[13px] !leading-none -mt-1">
              Desenvolvedor Full-Stack<span className="text-rose-700">.</span>
            </TypographyP>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium backdrop-blur-sm border border-gray-400/50 px-6 py-3 rounded-full">
          <li className={linkClass("home")}>
            <Dot active={activeSection === "home"} />
            <a href="#home">Home</a>
          </li>

          <li className={linkClass("sobre")}>
            <Dot active={activeSection === "sobre"} />
            <a href="#sobre">Sobre</a>
          </li>

          <li className={linkClass("projetos")}>
            <Dot active={activeSection === "projetos"} />
            <a href="#projetos">Projetos</a>
          </li>
        </ul>

        {/* BOTÃO */}
        <Button
          className={`
            hidden md:inline-block transition duration-300 hover:-translate-y-1
            px-3 py-1 mr-8 rounded-md border border-gray-500
            ${
              activeSection === "contato"
                ? "bg-rose-700 text-white"
                : "bg-[#6734de] hover:bg-rose-700 text-white"
            }
          `}
          asChild
        >
          <a href="#contato">Contato</a>
        </Button>
      </nav>
    </header>
  );
}
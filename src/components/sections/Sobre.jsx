import { TypographyH1, TypographyH2, TypographyH4 } from "../ui/typography";
import SplitText from "../ui/SplitText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MinhaImagem from "@/assets/images/FotoRyan.png";
import TiltedCard from "../ui/TiltedCard";
import LogoLoop from "../ui/LogoLoop";
import {SiReact, SiJavascript, SiPython, SiHtml5, SiCss3, SiMysql, SiNodedotjs, SiSqlite, SiTailwindcss, SiBootstrap,} from 'react-icons/si';

export default function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  const techLogos = [
    { node: <SiReact className="text-cyan-400" />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript className="text-yellow-400" />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { node: <SiPython className="text-blue-400" />, title: "Python", href: "https://www.python.org" },
    { node: <SiHtml5 className="text-orange-500" />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },
    { node: <SiCss3 className="text-blue-500" />, title: "CSS3", href: "https://developer.mozilla.org/docs/Web/CSS" },
    { node: <SiMysql className="text-blue-400" />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiNodedotjs className="text-green-500" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiSqlite className="text-sky-300" />, title: "SQLite", href: "https://www.sqlite.org" },
    { node: <SiTailwindcss className="text-sky-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiBootstrap className="text-purple-500" />, title: "Bootstrap", href: "https://getbootstrap.com" },
  ]

  return (
    <section
      id="sobre"
      className="relative bg-[#06000f] flex flex-col items-center justify-center py-30 px-7 gap-16"
    >
      {/* TÍTULO SECTION */}
      <div className="w-full flex justify-center">
        <SplitText
          text="About me"
          gradient
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7b52f4] via-[#6734de] to-[#4b23b3]"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          delay={0.05}
          duration={0.6}
          tag="h1"
        />
      </div>

      {/* FOTO | TEXTO | CARROUSEL */}
      <main className="mt-4 w-full flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            max-w-6xl w-full
            grid grid-cols-1 md:grid-cols-2
            gap-y-14 md:gap-x-20
            items-center
          "
        >
          {/* FOTO */}
          <div className="md:col-start-1 md:row-start-1 cursor-pointer">
            {/* Web MOBILE */}
            <div className="block md:hidden flex justify-center">
              <TiltedCard
                imageSrc={MinhaImagem}
                altText="Imagem Ryan Felipe"
                captionText="Ryan Felipe"
                containerWidth="220px"
                containerHeight="300px"
                imageWidth="220px"
                imageHeight="300px"
                rotateAmplitude={6}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>

            <div className="hidden md:block">
              {/*  Web Desktop */}
              <TiltedCard
                imageSrc={MinhaImagem}
                altText="Imagem Ryan Felipe"
                captionText="Ryan Felipe"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="ml-3 mt-5 px-3 py-1 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[10px] transition duration-300 hover:bg-[#7b52f4]">
                    <p className="tilted-card-demo-text">Ryan Felipe</p>
                  </div>
                }
              />
            </div>
          </div>

          {/* TEXTO SOBRE */}
          <div className="md:col-start-2 md:row-start-1 space-y-5 text-[#e0e1dd] text-center md:text-left">
            <TypographyH2>Desenvolvedor Full-Stack</TypographyH2>

            <p className="leading-relaxed text-gray-300 whitespace-pre-line">
              Olá, me chamo Ryan Felipe 🙋🏽‍♂️ {"\n"}
              Sou um jovem de 21 anos apaixonado por inovação e tecnologia.
              Atualmente, curso o 5º semestre de Análise e Desenvolvimento de
              Sistemas onde venho construindo minha base técnica através de
              experiências práticas em desenvolvimento de sistemas.
            </p>

            <p className="leading-relaxed text-gray-400">
              Gosto de transformar ideias em produtos reais, sempre buscando
              performance, acessibilidade e design limpo. Tenho experiência com
              desenvolvimento web utilizando tecnologias modernas, criando
              interfaces intuitivas e soluções eficientes tanto no front-end
              quanto no back-end.
            </p>
          </div>

          {/* CARROSEL */}
          <div
            className="
            md:col-span-2
            md:row-start-2
            flex flex-col items-center
            text-center
            mt-12 md:mt-20
            px-2 md:px-0
          "
          >
            <TypographyH2>
              <span
                className="
                inline-flex
                items-center
                gap-2 md:gap-3
                text-base md:text-xl
              "
              >
                {/* TEXTO */}
                <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-white via-[#6734de] to-[#4b23b3] bg-clip-text text-transparent">
                  Stacks que utilizo
                </span>

                {/* SVG */}
                <svg
                  className="
                  w-7 h-7
                  md:w-10 md:h-10
                  mt-0.5
                  text-[#e0e1dd]
                  transition duration-300
                  hover:text-[#7b52f4]
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5.8C4 4.8 4.8 4 5.8 4h12.4C19.2 4 20 4.8 20 5.8V15H4V5.8ZM12 12c0-.55.45-1 1-1h2a1 1 0 1 1 0 2h-2c-.55 0-1-.45-1-1Z"
                    clipRule="evenodd"
                  />
                  <path d="M2 17v1c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-1H2Z" />
                </svg>
              </span>
            </TypographyH2>

            {/* WRAPPER DO CARROSEL */}
            <div
              className="
              relative
              w-full
              max-w-5xl
              h-[140px] md:h-[200px]
              mt-6 md:mt-10
              overflow-hidden
              px-2 md:px-6
            "
            >
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={50}
                gap={28}
                scaleOnHover
                fadeOut
                fadeOutColor="#06000f"
                ariaLabel="Tecnologias que utilizo"
              />
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
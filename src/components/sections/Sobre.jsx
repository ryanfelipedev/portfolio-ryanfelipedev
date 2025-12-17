import { TypographyH1, TypographyH2, TypographyH4 } from "../ui/typography";
import SplitText from "../SplitText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MinhaImagem from "@/assets/images/FotoRyan.png";
import TiltedCard from "../TiltedCard";
// import Carrousel from "../Carrousel";

export default function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <section
      id="sobre"
      className="relative bg-[#06000f] flex flex-col items-center justify-center py-42 px-7 gap-16"
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
      <main className="mt-10 w-full flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            max-w-6xl w-full
            grid grid-cols-1 md:grid-cols-2
            gap-x-24 gap-y-16
            items-center
          "
        >
          {/* FOTO */}
          <div className="md:col-start-1 md:row-start-1 cursor-pointer">
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

          {/* TEXTO */}
          <div className="md:col-start-2 md:row-start-1 space-y-5 text-[#e0e1dd] text-center md:text-left">
            <h3 className="text-2xl font-semibold">Desenvolvedor Full-Stack</h3>

            <p className="leading-relaxed text-gray-300">
              Sou desenvolvedor apaixonado por criar interfaces modernas,
              experiências fluidas e soluções bem estruturadas. Tenho foco em
              JavaScript, React, backend e boas práticas de software.
            </p>

            <p className="leading-relaxed text-gray-400">
              Gosto de transformar ideias em produtos reais, sempre buscando
              performance, acessibilidade e design limpo.
            </p>
          </div>

          {/* CARROSEL */}
          <div className="md:col-span-2 md:row-start-2 text-left mt-30">
            <TypographyH2>
              <span className="inline-flex items-center gap-3">
                {/* TEXTO */}
                <span className="font-bold bg-gradient-to-r from-[#7b52f4] via-[#6734de] to-[#4b23b3] bg-clip-text text-transparent">
                  Stacks Que Utilizo
                </span>

                {/* SVG */}
                <svg
                  className="w-10 mt-2 h-10 text-[#e0e1dd] transition duration-300  hover:text-rose-700 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5.78571C4 4.80909 4.78639 4 5.77778 4H18.2222C19.2136 4 20 4.80909 20 5.78571V15H4V5.78571ZM12 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1ZM8.27586 6.31035c.38089-.39993 1.01387-.41537 1.4138-.03449l2.62504 2.5c.1981.18875.3103.45047.3103.72414 0 .27368-.1122.5354-.3103.7241l-2.62504 2.5c-.39993.3809-1.03291.3655-1.4138-.0344-.38088-.4-.36544-1.033.03449-1.4138L10.175 9.5 8.31035 7.72414c-.39993-.38089-.41537-1.01386-.03449-1.41379Z"
                    clipRule="evenodd"
                  />
                  <path d="M2 17v1c0 1.1046.89543 2 2 2h16c1.1046 0 2-.8954 2-2v-1H2Z" />
                </svg>
              </span>
            </TypographyH2>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
import { TypographyH1, TypographyH2, TypographyH4 } from "../ui/typography";
import SplitText from "../SplitText";
import {motion, useInView} from "framer-motion"
import {useRef} from "react"
import MinhaImagem from "@/assets/images/FotoRyan.png"
import TiltedCard from "../TiltedCard";

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
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7b52f4] via-[#6734de] to-[#4b23b3] "
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          delay={0.05}
          duration={0.6}
          tag="h1"
        />
      </div>

      {/* FOTO | TEXTO | Carrosel */}
      <main className="mt-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 120 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* FOTO */}
          <div className="cursor-pointer">
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
          <div className="space-y-5 text-[#e0e1dd] text-center md:text-left">
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
        </motion.div>
      </main>
    </section>
  );
}
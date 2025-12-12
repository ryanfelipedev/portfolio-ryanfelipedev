import { TypographyH1, TypographyH2, TypographyH4 } from "../ui/typography";
import MinhaImagem from "@/assets/images/Imagem-Pixelada.png";
import {motion, useInView} from "framer-motion"
import {useRef} from "react"
import SplitText from "../SplitText";
import Galaxy from "../Galaxy";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:false, margin: "-100px"})

  return (
    <section id="home" className="w-full pt-45 -pb-10">
      {/* BackGround  */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.4}
          hueShift={220}
          glowIntensity={0.4}
          saturation={0}
          twinkleIntensity={0.3}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 120 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 140 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
              max-w-6xl w-[90%]
              grid grid-cols-1 md:grid-cols-2
              gap-12 md:gap-32
              items-center mx-auto
              p-8
              "
      >
        {/* TEXTO */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <SplitText
              text="Bem vindo(a) ao meu"
              className="text-[#e0e1dd] font-bold text-4xl md:text-6xl text-nowrap"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              delay={0.05}
              duration={0.3}
              tag="h1"
            />

            <TypographyH2 className="text-[#e0e1dd] text-center text-2xl md:text-4xl leading-tight">
              <span className="text-sky-700">Portfolio</span> WebSite !
            </TypographyH2>
          </div>

          {/* BOTÕES  */}
          <div className="flex gap-4 mt-2">
            <button className="inline-flex items-center transition duration-300 hover:-translate-y-2 hover:bg-sky-700 hover:border-sky-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
              <svg
                className="w-4 h-6 text-[#e0e1dd]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
              </svg>
              <a href="#sobre" className="text-nowrap">
                Saiba Mais
              </a>
            </button>

            <button className="inline-flex items-center transition duration-300 hover:-translate-y-2 hover:bg-green-700 hover:border-green-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
              <svg
                className="w-4 h-6 text-[#e0e1dd]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                />
              </svg>
              <a href="/docs/Ryan_Curriculo.pdf" download>
                Currículo
              </a>
            </button>
          </div>
        </div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end -mt-15"
        >
          <img
            src={MinhaImagem}
            alt="Foto de Ryan"
            className="w-64 md:w-130 rounded-xl object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

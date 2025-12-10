import { TypographyH1, TypographyH2, TypographyH4 } from "../ui/typography";
import MinhaImagem from "@/assets/images/Imagem-Pixelada.png";
import Reveal from "../Reveal"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:false, margin: "-100px"})

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start px-6 pt-27 pb-1"
    >

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl w-[70%] grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto
                  border border-blue-400/50 rounded-xl p-8 shadow-[0_0_12px_1px_blue] bg-black"
      >

        {/* TEXTO */}
        <div className="text-left space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <TypographyH1 className="text-[#e0e1dd] text-center md:text-center sm:text-nowrap break-words">
              Bem vindo(a) ao meu 
            </TypographyH1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TypographyH2 className="text-[#e0e1dd] text-center md:text-center">
              <span className="text-sky-700">Portfolio</span> WebSite <span className="text-sky-700">!</span>
            </TypographyH2>
          </motion.div>
        </div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={MinhaImagem}
            alt="Foto de Ryan"
            className="w-64 md:w-120 rounded-xl object-cover"
          />
        </motion.div>

        {/* BOTÕES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}  // <---- impede sumiço
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mt-6 ml-2"
        >
          <button className="inline-flex items-center transition duration-300 hover:-translate-y-4 hover:bg-sky-700 hover:border-sky-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
            <svg className="w-4 h-6 text-[#e0e1dd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
            <a href="#sobre" className="text-nowrap">Saiba Mais</a>
          </button>

          <button className="inline-flex items-center transition duration-300 hover:-translate-y-4 hover:bg-green-700 hover:border-green-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
            <svg className="w-4 h-6 text-[#e0e1dd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
            </svg>
            <a href="/docs/Ryan_Curriculo.pdf" download>Currículo</a>
          </button>
        </motion.div>

      </motion.div>
      
    </section>
  );
}

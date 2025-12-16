import { TypographyH1, TypographyH2, TypographyH4 } from "../ui/typography";
import MinhaImagem from "@/assets/images/Imagem-Pixelada.png";
import {motion, useInView} from "framer-motion"
import {useRef} from "react"
import SplitText from "../SplitText";
import Galaxy from "../Galaxy";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <section id="home" className="w-full pt-30 md:pt-44 pb-10">
      {/* {isInView && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Galaxy
            mouseInteraction={false}
            mouseRepulsion={false}
            density={0.4}
            glowIntensity={0.1}
            twinkleIntensity={0.1}
            hueShift={220}
            saturation={0}
          />
        </div>
      )} */}

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
        <div className="flex flex-col gap-7 order-2 md:order-1">
          <div className="flex flex-col gap-2">
            <SplitText
              text="Olá Me chamo Ryan"
              className="text-[#e0e1dd] font-bold text-3xl md:text-5xl text-nowrap"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              delay={0.06}
              duration={0.06}
              ease="power1.out"
              tag="h1"
            />

            <SplitText
              text="Bem vindo(a) ao meu"
              className="text-[#e0e1dd] font-bold text-3xl md:text-4xl text-nowrap"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              delay={0.06}
              duration={0.06}
              ease="power1.out"
              tag="h1"
            />

            <div className="flex items-center gap-3">
              {/* TEXTO */}
              <TypographyH2 className="text-[#e0e1dd] text-left text-2xl md:text-4xl leading-tight">
                <span className="text-[#6734de] font-bold">Portfolio</span>{" "}
                WebSite !
              </TypographyH2>

              {/* SVG GitHub*/}
              <a href="https://github.com/ryanfelipedev" target="blank">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-20 w-10 h-10 text-[#6734de] hover:text-white cursor-pointer"
                  style={{ willChange: "transform", display: "inline-block" }}
                  animate={{
                    y: [-6, 6, -6],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  />
                </motion.svg>
              </a>

              {/* SVG Linkedin*/}
              <a href="https://www.linkedin.com/in/ryanfelipedecarvalho/" target="blank">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor" aria-hidden="true" className="w-8 h-10
                  text-[#6734de] hover:text-white cursor-pointer" style=
                  {{ willChange: "transform", display: "inline-block" }}
                  animate=
                  {{
                    y: [-6, 6, -6],
                  }}
                  transition=
                  {{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.728V1.727C24 .774 23.21 0 22.23 0ZM7.09 20.452H3.56V9h3.53v11.452ZM5.325 7.433a2.047 2.047 0 1 1 0-4.094 2.047 2.047 0 0 1 0 4.094ZM20.452 20.452h-3.53v-5.569c0-1.327-.027-3.037-1.85-3.037-1.85 0-2.133 1.445-2.133 2.939v5.667h-3.53V9h3.39v1.561h.047c.472-.9 1.623-1.85 3.338-1.85 3.567 0 4.268 2.35 4.268 5.407v6.334Z" />
                </motion.svg>
              </a>
              
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <TypographyH4 className="text-[#e0e1dd] text-left text-lg leading-relaxed max-w-xl">
              Desenvolvedor{" "}
              <span className="text-[#6734de] font-medium underline decoration-[#6734de]">
                Full-Stack
              </span>{" "}
              que transforma ideias em aplicações web completas, com foco em{" "}
              <span className="text-[#6734de] font-medium underline decoration-[#6734de]">
                Performance
              </span>{" "}
              e{" "}
              <span className="text-[#6734de] font-medium underline decoration-[#6734de]">
                Qualidade
              </span>{" "}
              !
            </TypographyH4>
          </div>

          {/* BOTÕES  */}
          <div className="flex gap-4 mt-2">
            <a href="#sobre" className="text-nowrap">
              <button className="inline-flex items-center transition duration-300 hover:-translate-y-2 hover:bg-[#6734de] hover:border-sky-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
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
                <span>Saiba Mais</span>
              </button>
            </a>

            <a href="/docs/Ryan_Curriculo.pdf" download>
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
                <span>Currículo</span>
              </button>
            </a>

          </div>
        </div>

        {/* IMAGEM */}
        <motion.img
          src={MinhaImagem}
          alt="Foto de Ryan"
          className="w-64 md:w-130 rounded-xl object-cover order-1 md:order-2"
          animate={{ y: [0, -80, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}

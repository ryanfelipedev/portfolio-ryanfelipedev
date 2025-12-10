import { TypographyH1, TypographyH4 } from "../ui/typography";
import MinhaImagem from "@/assets/images/Imagem-Pixelada.png"; // 

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start px-6 pt-27 pb-1"
    >
      <div className="max-w-6xl w-[70%] grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto
                  border border-gray-400/50 rounded-xl p-8 shadow-lg">
        
        {/* TEXTO */}
        <div className="text-left space-y-3">
          <TypographyH1 className="text-[#e0e1dd] text-nowrap">
            <span>&lt;Olá, me chamo <span className="text-sky-700">Ryan!</span>&gt;</span>
          </TypographyH1>

          <TypographyH4 className="text-[#e0e1dd] text-center">
            Desenvolvedor de Software.
          </TypographyH4>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center md:justify-end">
          <img
            src={MinhaImagem}
            alt="Foto de Ryan"
            className="w-64 md:w-120 rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 ml-2">

          <button className="inline-flex items-center transition duration-300 hover:-translate-y-4 hover:bg-sky-700 hover:border-sky-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
            <svg className="w-4 h-6 text-[#e0e1dd] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
            <a href="#sobre" className="text-nowrap">Saiba Mais</a>
          </button>

          <button className="inline-flex items-center transition duration-300 hover:-translate-y-4 hover:bg-green-700 hover:border-green-700 px-4 h-9 bg-transparent backdrop-blur-md border border-white font-bold rounded-full text-[#e0e1dd] cursor-pointer gap-3">
            <svg className="w-4 h-6 text-[#e0e1dd] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
            </svg>
            <a href="/docs/Ryan_Curriculo.pdf" download >Currículo</a>
          </button>

        </div>


      </div>
    </section>
  );
}


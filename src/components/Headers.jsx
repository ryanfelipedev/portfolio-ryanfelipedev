import { Button } from "@heroui/button"
import { TypographyH3 } from "@/components/ui/typography";
import { TypographyH4 } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-17 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl flex items-center justify-between px-6">

        {/* LOGO + NOME */}
        <div className="flex items-center gap-2 ml-10">
          <TypographyH4 className="text-rose-700 cursor-pointer">
            <span>&lt;/&gt;</span>
          </TypographyH4>

          <div className="flex flex-col items-start">
            <TypographyH4 className="text-[#e0e1dd] cursor-pointer !leading-none !mb-1">
              Ryan Felipe
            </TypographyH4>

            <TypographyP className="text-gray-400 text-[13px] cursor-pointer !leading-none !mt-0 -mt-1">
              Desenvolvedor Full-Stack
              <span className="text-rose-700">.</span>
            </TypographyP>
          </div>
        </div>


        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-[#BE3144] transition cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#BE3144] transition cursor-pointer">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="hover:text-[#BE3144] transition cursor-pointer">
            <a href="#projetos">Projetos</a>
          </li>
        </ul>

        {/* BOTÃO DESKTOP */}
        <Button radius="full" asChild className="hidden md:inline-flex px-4 h-9 bg-rose-700 text-[#e0e1dd] font-bold shadow-lg rounded-full mr-10" > 
          <a className="flex item-center justify-center w-full" href="#contato"> Contato </a> 
        </Button>

        {/* MENU MOBILE */}
        <button className="md:hidden text-3xl text-[#BE3144] hover:text-sky-400 transition cursor-pointer">
          ☰
        </button>
</header>

  );
}
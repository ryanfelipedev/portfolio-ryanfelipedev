import { Button } from "./ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import { TypographyH4 } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <nav className=" w-[65%] mx-auto px-7 py-2 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-sm border border-gray-400/50" >

        {/* NOME */}
        <div className="flex items-center gap-2 ml-10">
          <TypographyH4 className="text-rose-700 cursor-pointer">
            <span>&lt;/&gt;</span>
          </TypographyH4>

          <div className="flex flex-col items-start">
            <TypographyH4 className="text-[#e0e1dd] cursor-pointer !leading-none !mb-0">
              Ryan Felipe
            </TypographyH4>

            <TypographyP className="text-gray-400 text-[13px] cursor-pointer !leading-none !mt-0 -mt-1">
              Desenvolvedor Full-Stack
              <span className="text-rose-700">.</span>
            </TypographyP>
          </div>
        </div>


        {/* MENU (desktop - web) */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-[#BE3144] transition cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-[#BE3144] transition cursor-pointer"><a href="#sobre">Sobre</a></li>
          <li className="hover:text-[#BE3144] transition cursor-pointer"><a href="#projetos">Projetos</a></li>
        </ul>

        {/* BOTÃO */}
        <Button  className="hidden md:inline-block bg-[#BE3144] hover:bg-[#BE3144] transition duration-300 hover:-translate-y-1 text-white px-4 py-2 mr-8 rounded-md border border-gray-500" asChild>
          <a href="#contato">Contato</a>
        </Button> 

        {/* MENU (mOBILE) */}
        <div className="md:hidden">
          <button className="text-3xl text-[#BE3144]  transition">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
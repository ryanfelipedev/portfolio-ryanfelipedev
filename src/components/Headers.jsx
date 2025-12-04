import Logo from "../assets/icons/ryan-logo1.svg"
import { Button } from "./ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO / NOME */}
        <div className="flex items-center gap-1.5">

            {/* Imagem Logo */}
            <img  
                src={Logo}
                alt="Ryan Logo"
                className="w-15 h-15 rounded-lg"
            />
            
            {/* Nome */}
            <div className="flex flex-col leading-tight">
              <TypographyH3 className="text-[#9A6DFF] cursor-pointer">
                Ryan Felipe
              </TypographyH3>
              
              <TypographyP className="text-white text-sm ml-2 cursor-pointer">
                Desenvolvedor Full-Stack<span className="text-[#9A6DFF]">.</span>
              </TypographyP>
            </div>

        </div>


        {/* MENU (desktop - web) */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-[#9A6DFF] transition cursor-pointer">Home</li>
          <li className="hover:text-[#9A6DFF] transition cursor-pointer">Sobre</li>
          <li className="hover:text-[#9A6DFF] transition cursor-pointer">Projetos</li>
        </ul>

        {/* BOTÃO */}
        <Button variant="outline" className="hidden md:inline-block bg-[#8b5bf5] text-white px-4 py-2 rounded-md border border-gray-500 hover:bg-[#9A6DFF]" asChild>
          <a href="#contato">Contato</a>
        </Button> 

        {/* MENU (mOBILE) */}
        <div className="md:hidden">
          <button className="text-3xl text-white hover:text-[#9A6DFF] transition">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
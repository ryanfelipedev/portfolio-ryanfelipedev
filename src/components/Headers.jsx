import { Button } from "./ui/button";
import { TypographyH3 } from "@/components/ui/typography";
import { TypographyH4 } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* NOME */}
        <div className="flex items-center gap-1.5">

            <TypographyH4 className="text-[#BE3144] cursor-pointer">
              <span>&lt;/&gt;</span>
            </TypographyH4>


            {/* Nome */}
            <div className="flex flex-col leading-tight">
              <TypographyH3 className="text-[#e0e1dd] cursor-pointer">
                Ryan Felipe
              </TypographyH3>
              
              <TypographyP className="text-gray-400 text-sm ml-2 cursor-pointer">
                Desenvolvedor Full-Stack<span className="text-[#3486c3]">.</span>
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
        <Button variant="destructive" className="hidden md:inline-block bg-[#BE3144] text-white px-4 py-2 rounded-md border border-gray-500" asChild>
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
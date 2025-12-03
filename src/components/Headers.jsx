import Logo from "../assets/icons/ryan-logo1.svg"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO / NOME */}
        <div className="flex items-center gap-1.5">
            <img  
                src={Logo}
                alt="Ryan Logo"
                className="w-15 h-15 rounded-lg"
            />
            
            {/* Font Poppins */}
            <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
            />
            
            <h1 className="text-2xl font-bold tracking-tight text-[#9A6DFF] cursor-pointer font-[Poppins]">

                <span className="block">Ryan Felipe</span>

                <span className="block text-white text-sm font-normal ml-2 tracking-tight">
                    Desenvolvedor Full-Stack<span className="text-[#9A6DFF]">.</span>
                </span>
            </h1>

        </div>


        {/* MENU (desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li className="hover:text-[#9A6DFF] transition cursor-pointer">Home</li>
          <li className="hover:text-[#9A6DFF] transition cursor-pointer">Sobre</li>
          <li className="hover:text-[#9A6DFF] transition cursor-pointer">Projetos</li>
        </ul>

        {/* BOTÃO */}
        <a 
          href="#contato"
          className="hidden md:inline-block bg-[#9A6DFF] text-white px-4 py-2 rounded-md transition border border-solid border-gray-500"
        >
          Contato
        </a>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <button className="text-3xl text-black-700 hover:text-blue-600 transition">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
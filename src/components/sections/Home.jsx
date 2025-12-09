import { AuroraText } from "../ui/aurora-text";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center">
        {/* Animando o Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
        >
          <AuroraText className="text-5xl font-bold">
            Bem-Vindo(a) ao meu Portfólio
          </AuroraText>

          <span className="text-5xl"> 👨🏽‍💻</span>
        </motion.div>

        {/* Animando o subtítulo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, delay: 0.5 }}
          className="text-2xl text-blue-100 mt-2"
        >
          Me chamo Ryan e sou Desenvolvedor de Software.
        </motion.h1>

        
      </div>
    </section>
  );
}

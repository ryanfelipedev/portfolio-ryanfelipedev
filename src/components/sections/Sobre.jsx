import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center px-4">

      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-[#e0e1dd] font-bold mb-4">Sobre mim</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Sou um desenvolvedor focado em criar interfaces modernas e sistemas robustos...
          </p>
        </motion.div>
      </div>

    </section>
  );
}


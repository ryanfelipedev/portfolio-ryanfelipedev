import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function SectionReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-40 w-full bg-blue-500"
    >
      Revelando sempre que volta pra tela
    </motion.div>
  );
}

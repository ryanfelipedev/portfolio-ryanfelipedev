import SplitText from "../ui/SplitText";
import { Particles } from "@/components/ui/particles"


export default function Projetos() {
  return (
    <section 
     id="projetos" 
     className="relative flex items-center justify-center py-42 px-7 overflow-hidden"
     >
        
      {/* BACKGROUND  */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        ease={81}
        color="#e0e1dd"
        refresh
      />

      <SplitText
          text="Projetos"
          gradient
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#7b52f4] via-[#6734de] to-[#4b23b3]"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          delay={0.05}
          duration={0.6}
          tag="h1"
        />

    </section>
  );
}

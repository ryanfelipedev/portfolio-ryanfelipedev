import SplitText from "../ui/SplitText";

export default function Projetos() {
  return (
    <section 
     id="projetos" 
     className="relative flex items-center justify-center py-42 px-7"
     >
        
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

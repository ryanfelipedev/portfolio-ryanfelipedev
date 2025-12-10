import SplitText from "../SplitText";

export default function Sobre() {

  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center px-4">

      
      <SplitText
        text="Sobre mim"
        className="text-4xl md:text-5xl font-bold text-center text-[#e0e1dd]"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        delay={0.05}
        duration={0.6}
        tag="h1"
      />

    </section>
  );
}


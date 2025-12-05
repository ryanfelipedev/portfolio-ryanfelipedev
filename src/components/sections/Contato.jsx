export default function Contato() {
  return (
    <section id="contato" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Seu nome" className="w-full p-3 rounded-md bg-neutral-900 border border-gray-700" />
          <input type="email" placeholder="Seu e-mail" className="w-full p-3 rounded-md bg-neutral-900 border border-gray-700" />
          <textarea placeholder="Mensagem" rows="5" className="w-full p-3 rounded-md bg-neutral-900 border border-gray-700"></textarea>

          <button className="w-full text-[#e0e1dd] bg-[#BE3144] hover:bg-[#a42a3a] p-3 rounded-md font-semibold cursor-pointer">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}



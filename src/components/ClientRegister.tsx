function ClientRegister() {
  return (
    <section className="py-20 px-8 bg-zinc-950 text-white">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Registrate y obtené
          <span className="text-blue-500"> descuentos</span>
        </h2>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <form className="grid gap-5">

            <input
              type="text"
              placeholder="Nombre y apellido"
              className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              placeholder="Teléfono / WhatsApp"
              className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Equipo (TV, notebook, celular...)"
              className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 rounded-lg py-3 font-bold transition"
            >
              Crear cuenta de cliente
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ClientRegister;
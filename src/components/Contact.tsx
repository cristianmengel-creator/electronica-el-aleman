import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contacto" className="bg-zinc-950 py-24">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Solicitar{" "}
          <span className="text-blue-500">
            Reparación
          </span>
        </h2>


        <p className="text-center text-zinc-400 mb-12">
          Contanos qué equipo tenés y cuál es la falla.
          Te responderemos lo antes posible.
        </p>


        <div className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-8
        ">


          <div className="grid gap-5">


            <input
              type="text"
              placeholder="Nombre"
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-blue-500
              "
            />


            <input
              type="tel"
              placeholder="Teléfono"
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-blue-500
              "
            />


            <select
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-zinc-400
                outline-none
                focus:border-blue-500
              "
            >

              <option>
                Seleccionar equipo
              </option>

              <option>
                Smart TV
              </option>

              <option>
                Notebook
              </option>

              <option>
                Celular
              </option>

              <option>
                Otro equipo
              </option>

            </select>


            <textarea
              placeholder="Describí la falla del equipo"
              rows={5}
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-blue-500
              "
            />


            <a
              href="https://wa.me/5492236988833?text=Hola%20Electrónica%20El%20Alemán,%20quiero%20consultar%20por%20una%20reparación"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-green-600
                hover:bg-green-500
                text-white
                font-bold
                py-4
                rounded-xl
                transition
              "
            >

              <FaWhatsapp />

              Enviar consulta por WhatsApp

            </a>


          </div>


        </div>


      </div>


    </section>
  );
}

export default Contact;
import { FaWhatsapp, FaTools } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>

            <div className="flex items-center gap-3 mb-4">

              <FaTools className="text-3xl text-blue-500" />

              <h2 className="text-2xl font-bold text-white">
                Electrónica{" "}
                <span className="text-blue-500">
                  El Alemán
                </span>
              </h2>

            </div>

            <p className="text-zinc-400">
              Reparación profesional de equipos electrónicos,
              Smart TV, notebooks, celulares y microsoldadura.
            </p>

          </div>


          <div>

            <h3 className="text-xl font-bold text-white mb-4">
              Servicios
            </h3>

            <ul className="text-zinc-400 space-y-2">
              <li>Smart TV</li>
              <li>Notebooks</li>
              <li>Celulares</li>
              <li>Microsoldadura</li>
            </ul>

          </div>


          <div>

            <h3 className="text-xl font-bold text-white mb-4">
              Contacto
            </h3>

            <p className="text-zinc-400 mb-4">
              Consultas y presupuestos por WhatsApp.
            </p>


            <a
              href="https://wa.me/5492236988833"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                bg-green-600
                hover:bg-green-500
                px-5
                py-3
                rounded-xl
                font-bold
                text-white
                w-fit
              "
            >

              <FaWhatsapp />

              WhatsApp

            </a>


          </div>

        </div>


        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500">

          © 2026 Electrónica El Alemán - Todos los derechos reservados.

        </div>


      </div>

    </footer>
  );
}

export default Footer;
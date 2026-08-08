import { FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Location() {
  return (
    <section id="ubicacion" className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white mb-12"
        >
          Dónde <span className="text-blue-500">Estamos</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-2xl
              p-8
              hover:border-blue-500
              transition
            "
          >

            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-4xl text-blue-500" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Ubicación
                </h3>

                <p className="text-zinc-400">
                  Av. Vélez Sardinel 525
                  <br />
                  Zona El Faro
                  <br />
                  Mar del Plata
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4 mb-8">
              <FaClock className="text-4xl text-orange-400" />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Horario
                </h3>

                <p className="text-zinc-400">
                  Lunes a Viernes
                  <br />
                  08:00 hs a 18:00 hs
                </p>
              </div>
            </div>


            <a
              href="https://wa.me/5492236988833"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-green-600
                hover:bg-green-500
                rounded-xl
                py-4
                font-bold
                text-white
                transition
              "
            >
              <FaWhatsapp />
              Consultar por WhatsApp
            </a>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              rounded-2xl
              overflow-hidden
              border
              border-zinc-800
            "
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.445059613738!2d-57.548969199999995!3d-38.083303099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e74a3545b871%3A0x6f5bd2deae4e262!2sV%C3%A9lez%20S%C3%A1rsfield%20525%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1785784695877!5m2!1ses!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Location;
import { FaTv, FaLaptop, FaMobileAlt, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaTv />,
      title: "Smart TV",
      text: "Reparación de televisores LED, LCD, OLED y QLED. Fallas de imagen, sonido, fuentes y placas."
    },
    {
      icon: <FaLaptop />,
      title: "Notebooks",
      text: "Diagnóstico y reparación de motherboards, alimentación, pantallas y componentes electrónicos."
    },
    {
      icon: <FaMobileAlt />,
      title: "Celulares",
      text: "Reparación de módulos, conectores de carga y fallas electrónicas a nivel componente."
    },
    {
      icon: <FaMicrochip />,
      title: "Microsoldadura",
      text: "Especialistas en reparación de placas con componentes SMD, pistas dañadas y circuitos integrados."
    }
  ];

  return (
    <section id="servicios" className="bg-zinc-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Nuestros{" "}
          <span className="text-blue-500">
            Servicios
          </span>
        </h2>

        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-14">
          Soluciones profesionales para equipos electrónicos,
          con diagnóstico preciso y reparación a nivel componente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              className="
                group
                bg-zinc-950
                border border-zinc-800
                rounded-2xl
                p-8
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div
                className="
                  text-6xl
                  text-blue-500
                  mb-6
                  group-hover:scale-110
                  transition
                "
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {service.text}
              </p>

              <button
                className="
                  mt-6
                  text-blue-500
                  hover:text-blue-400
                  font-semibold
                "
              >
                Ver más →
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;
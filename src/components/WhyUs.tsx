import { FaAward, FaClock, FaShieldAlt, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

function WhyUs() {

  const reasons = [
    {
      icon: <FaAward />,
      title: "Experiencia",
      text: "Experiencia en reparación electrónica profesional."
    },
    {
      icon: <FaMicrochip />,
      title: "Microsoldadura",
      text: "Reparación de placas a nivel componente."
    },
    {
      icon: <FaClock />,
      title: "Diagnóstico",
      text: "Analizamos cada equipo antes de reparar."
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantía",
      text: "Trabajos realizados con responsabilidad."
    }
  ];


  return (
    <section id="nosotros" className="bg-zinc-950 py-20">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-center text-white mb-12">
          ¿Por qué elegir{" "}
          <span className="text-blue-500">
            Electrónica El Alemán
          </span>?
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


          {reasons.map((item, index) => (

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
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                p-6
                text-center
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >


              <div className="
                text-5xl
                text-orange-400
                flex
                justify-center
                mb-5
              ">
                {item.icon}
              </div>


              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>


              <p className="text-zinc-400">
                {item.text}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default WhyUs;
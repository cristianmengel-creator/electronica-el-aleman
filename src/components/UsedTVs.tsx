import { FaTv, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function UsedTVs() {
  const tvs = [
     {
      brand: "SMART Philips 43 pulgadas full HD",
      description:
        "Con control remoto. Reacondicionado a nuevo. $200.000",
      image: "/galeria/tvph.jpg",
      status: "Vendido",
      color: "bg-red-500",
      features: [
        "Revisado y provado",
        "Imagen y sonido perfectos",
        "Garantía escrita",
      ],
    },
    
    {
      brand: "Noblex SMART TV 32 pulgadas Full HD",
      description:
        "Con control remoto original. Reacondicionado a nuevo. $110.000",
      image: "/galeria/noblex.jpg",
      status: "Vendido",
      color: "bg-red-500",
      features: [
        "Revisado y probado",
        "Imagen y sonido perfectos",
        "Garantía escrita",
      ],
    },
    {
      brand: "BGH TV 32 pulgadas Full HD",
      description:
        "Con control remoto + Roku TV Reacondicionado a nuevo. $130.000",
      image: "/galeria/bgh.jpg",
      status: "Disponible",
      color: "bg-green-500",
      features: [
        "Revisado y probado",
        "Imagen y sonido perfectos",
        "Garantía escrita",
      ],
    },
    {
      brand: "Monitor LG 22 pulgadas",
      description:
        "Monitor para PC 22 pulgadas con entrada DVI-D y VGA. $65.000",
      image: "/galeria/mlg.jpg",
      status: "Disponible",
      color: "bg-green-500",
      features: [
        "Revisado y probado",
        "Imagen perfecta",
        "Garantía escrita",
      ],
    },
  ];

  return (
    <section id="usados" className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white mb-4"
        >
          Equipos{" "}
          <span className="text-blue-500">
            Reacondicionados
          </span>
        </motion.h2>

        <p className="text-center text-zinc-400 mb-14">
          Televisores y monitores revisados, reparados y garantizados por nuestro laboratorio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {tvs.map((tv, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300"
            >

              <div className="relative">

                <img
                  src={tv.image}
                  alt={tv.brand}
                  className="w-full h-72 object-cover"
                />

                <span
                  className={`absolute top-4 left-4 ${tv.color} px-4 py-2 rounded-full text-sm font-bold text-white`}
                >
                  {tv.status}
                </span>

              </div>


              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">

                  <FaTv className="text-blue-500 text-3xl" />

                  <h3 className="text-2xl font-bold text-white">
                    {tv.brand}
                  </h3>

                </div>


                <p className="text-zinc-300 mb-6">
                  {tv.description}
                </p>


                <div className="space-y-3 mb-8">

                  {tv.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 text-zinc-300"
                    >

                      <FaCheckCircle className="text-green-500" />

                      {feature}

                    </div>

                  ))}

                </div>


                <a
                  href={`https://wa.me/5492236988833?text=Hola%20Electrónica%20El%20Alemán,%20quiero%20consultar%20por%20${encodeURIComponent(
                    tv.brand
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-3 bg-green-600 hover:bg-green-500 rounded-xl py-4 font-bold text-white transition"
                >

                  <FaWhatsapp />

                  Consultar este equipo

                </a>


              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default UsedTVs;
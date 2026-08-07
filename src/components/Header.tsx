import { FaTv, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function UsedTVs() {
  const tvs = [
    {
      brand: "Noblex Smart TV 32 pulgadas Full HD",
      description:
        "Con control remoto original. Reacondicionado a nuevo.",
      price: "$120.000",
      image: "/tvnoblexsmart.jpg",
      status: "Disponible",
      color: "bg-green-600",
      features: [
        "Revisado y probado",
        "Imagen y sonido perfectos",
        "Con garantía",
      ],
    },
    {
      brand: "BGH Smart TV Full HD",
      description:
        "Con control remoto. Reacondicionado a nuevo.",
      price: "$100.000",
      image: "/bgh.jpg",
      status: "Disponible",
      color: "bg-green-600",
      features: [
        "Revisado y probado",
        "Imagen y sonido perfectos",
        "Con garantía",
      ],
    },
    {
      brand: "Monitor LG 22 Pulgadas",
      description:
        "Monitor para PC de 22 pulgadas con entradas DVI y VGA.",
      price: "$65.000",
      image: "/monitorlg.jpg",
      status: "Disponible",
      color: "bg-green-600",
      features: [
        "Revisado y probado",
        "Imagen perfecta",
        "Con garantía",
      ],
    },
  ];

  return (
    <section id="tvs" className="bg-zinc-950 py-24">
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
          Equipos revisados, reparados y garantizados por nuestro laboratorio.
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

                <div className="flex items-center gap-3 mb-3">
                  <FaTv className="text-blue-500 text-3xl" />

                  <h3 className="text-2xl font-bold text-white">
                    {tv.brand}
                  </h3>
                </div>

                <p className="text-zinc-300 mb-2">
                  {tv.description}
                </p>

                <p className="text-3xl font-bold text-green-500 mb-6">
                  {tv.price}
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
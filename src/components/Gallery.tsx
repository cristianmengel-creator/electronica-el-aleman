import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function Gallery() {
  const works = [
     {
    image: "/galeria/R1.jpg",
    title: "Reparación de Smart TV",
    description: "Diagnóstico y reparación electrónica."
  },
   {
    image: "/galeria/R2.jpg",
    title: "Reparación de Smart TV",
    description: "Diagnóstico y reparación electrónica."
  },
   {
    image: "/galeria/R3.jpg",
    title: "Reparación de Smart TV",
    description: "Diagnóstico y reparación electrónica."
  },
    {
      title: "Laboratorio Electrónico",
      description: "Banco de trabajo equipado para diagnóstico y reparación electrónica.",
      image: "/laboratorio.jpg",
    },
    {
      title: "Microsoldadura Profesional",
      description: "Reparación de placas electrónicas a nivel componente.",
      image: "/microsoldadura.jpg",
    },
    {
      title: "Instrumental de Precisión",
      description: "Diagnóstico con osciloscopio e instrumental profesional.",
      image: "/osciloscopio.jpg",
    },
    {
      title: "Reparación de Placas",
      description: "Fuentes, mainboards y circuitos electrónicos.",
      image: "/placa.jpg",
    },
    {
      title: "Smart TV",
      description: "Reparación y mantenimiento de televisores.",
      image: "/tv.jpg",
    },
    {
      title: "Servicio Técnico",
      description: "Más de 15 años reparando equipos electrónicos.",
      image: "/laboratorio.jpg",
    },
  ];

  return (
    <section id="trabajos" className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white mb-4"
        >
          Nuestros <span className="text-blue-500">Trabajos</span>
        </motion.h2>

        <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-14">
          Algunas imágenes de nuestro laboratorio y de los trabajos realizados.
        </p>

        <PhotoProvider maskOpacity={0.9}>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {works.map((work, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl border border-zinc-800 hover:border-blue-500 transition-all duration-500"
              >

                <PhotoView src={work.image}>

                  <div className="cursor-pointer relative">

                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6">

                      <h3 className="text-2xl font-bold text-white">
                        {work.title}
                      </h3>

                      <p className="text-zinc-300 mt-2">
                        {work.description}
                      </p>

                    </div>

                  </div>

                </PhotoView>

              </motion.div>

            ))}

          </div>

        </PhotoProvider>

      </div>
    </section>
  );
}

export default Gallery;
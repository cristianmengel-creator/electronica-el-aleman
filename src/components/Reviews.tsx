import { motion } from "framer-motion";

function Reviews() {

  const reviews = [
    {
      name: "Cliente Smart TV",
      text: "Excelente atención, diagnóstico rápido y reparación impecable."
    },
    {
      name: "Cliente Notebook",
      text: "Muy buen trabajo de microsoldadura. Equipo recuperado funcionando perfecto."
    },
    {
      name: "Cliente Celular",
      text: "Responsabilidad y buena comunicación durante toda la reparación."
    }
  ];


  return (
    <section id="opiniones" className="bg-zinc-900 py-24">

      <div className="max-w-7xl mx-auto px-6">


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white mb-4"
        >
          Opiniones de{" "}
          <span className="text-blue-500">
            Clientes
          </span>
        </motion.h2>


        <p className="text-center text-zinc-400 mb-12">
          La confianza de nuestros clientes es lo más importante.
        </p>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          {reviews.map((review, index) => (

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
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                p-8
                hover:border-blue-500
                hover:-translate-y-2
                transition-all
              "
            >


              <div className="text-orange-400 text-3xl mb-4">
                ★★★★★
              </div>


              <p className="text-zinc-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>


              <h3 className="text-white font-bold text-lg">
                {review.name}
              </h3>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default Reviews;
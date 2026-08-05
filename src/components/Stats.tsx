import { motion } from "framer-motion";

function Stats() {

  const stats = [
    {
      number: "+10",
      text: "Años de experiencia"
    },
    {
      number: "+3000",
      text: "Equipos reparados"
    },
    {
      number: "+1500",
      text: "Clientes satisfechos"
    },
    {
      number: "100%",
      text: "Compromiso"
    }
  ];

  return (
    <section className="mt-16">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
            className="
              bg-zinc-950/70
              border
              border-zinc-800
              rounded-xl
              p-5
            "
          >

            <h3 className="text-3xl font-bold text-blue-500">
              {item.number}
            </h3>

            <p className="text-zinc-400 text-sm mt-2">
              {item.text}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Stats;
import Header from "../components/Header";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import UsedTVs from "../components/UsedTVs";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Stats from "../components/Stats";
import ScrollTop from "../components/ScrollTop";
import { motion } from "framer-motion";

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <Header />

      <section
        id="inicio"
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-center
          px-6
          bg-cover
          bg-center
          relative
        "
        style={{
          backgroundImage: "url('/laboratorio.jpg')",
        }}
      >

        {/* Oscurece el fondo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50"></div>

        <div className="relative z-10 max-w-5xl">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-blue-600/20 border border-blue-500 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            📍 Mar del Plata • Servicio Técnico Especializado
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Electrónica{" "}
            <span className="text-blue-500">
              El Alemán
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-2xl md:text-4xl text-orange-400 font-semibold"
          >
            Reparación electrónica de alta precisión
          </motion.h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 leading-8">
            Especialistas en reparación de
            <strong> Smart TV</strong>,
            <strong> notebooks</strong>,
            <strong> celulares</strong> y
            <strong> microsoldadura</strong>.
            Diagnóstico profesional, instrumental de precisión y garantía en cada reparación.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <span className="bg-zinc-900/80 border border-zinc-700 px-5 py-3 rounded-full">
              📺 Smart TV
            </span>

            <span className="bg-zinc-900/80 border border-zinc-700 px-5 py-3 rounded-full">
              💻 Notebooks
            </span>

            <span className="bg-zinc-900/80 border border-zinc-700 px-5 py-3 rounded-full">
              📱 Celulares
            </span>

            <span className="bg-zinc-900/80 border border-zinc-700 px-5 py-3 rounded-full">
              🔬 Microsoldadura
            </span>

          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            href="https://wa.me/5492236988833?text=Hola%20Electrónica%20El%20Alemán,%20quiero%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              bg-green-600
              hover:bg-green-500
              px-10
              py-5
              rounded-xl
              text-xl
              font-bold
              transition
              shadow-2xl
            "
          >
            📲 Solicitar presupuesto
          </motion.a>

          <div className="mt-16">
            <Stats />
          </div>

        </div>

      </section>

      <Services />

      <WhyUs />

      <Gallery />

      <UsedTVs />

      <Reviews />

      <Location />

      <Contact />

      <Footer />

      <WhatsAppFloat />

      <ScrollTop />

    </main>
  );
}

export default Home;
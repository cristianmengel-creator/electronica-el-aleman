import { FaWhatsapp, FaTv, FaLightbulb, FaPlug, FaMicrochip } from "react-icons/fa";

const products = [
  {
    name: "Controles Remotos",
    description:
      "Controles originales y universales para Smart TV y televisores.",
    icon: <FaTv />,
    image: "/productos/control-remoto.jpg",
  },
  {
    name: "Tiras LED para Smart TV",
    description:
      "Tiras LED para reemplazo de iluminación de diferentes modelos de Smart TV.",
    icon: <FaLightbulb />,
    image: "/productos/tiras-led.jpg",
  },
  {
    name: "Fuentes y Adaptadores",
    description:
      "Fuentes, adaptadores y accesorios para equipos electrónicos.",
    icon: <FaPlug />,
    image: "/productos/fuentes.jpg",
  },
  {
    name: "Componentes Electrónicos",
    description:
      "Componentes y módulos electrónicos para reparación y mantenimiento.",
    icon: <FaMicrochip />,
    image: "/productos/componentes.jpg",
  },
];

function Products() {
  const whatsappMessage = (product: string) =>
    `https://wa.me/5492236988833?text=Hola%20Electrónica%20El%20Alemán,%20quiero%20consultar%20por%20${encodeURIComponent(
      product
    )}`;

  return (
    <section
      id="productos"
      className="py-24 px-6 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/40 text-blue-400 text-sm font-semibold">
            Productos electrónicos
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Productos y <span className="text-blue-500">Accesorios</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-zinc-400 text-lg">
            Controles remotos, tiras LED, fuentes, componentes y accesorios
            electrónicos. Consultá disponibilidad y precios por WhatsApp.
          </p>
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all duration-300 shadow-xl"
            >
              {/* IMAGEN */}
              <div className="h-56 bg-zinc-800 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute text-blue-500 text-5xl">
                  {product.icon}
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {product.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-6 min-h-[72px]">
                  {product.description}
                </p>

                <a
                  href={whatsappMessage(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-xl transition"
                >
                  <FaWhatsapp className="text-xl" />
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* TEXTO INFERIOR */}
        <div className="text-center mt-14">
          <p className="text-zinc-500">
            ¿Buscás algún producto en particular?
          </p>

          <a
            href="https://wa.me/5492236988833?text=Hola%20Electrónica%20El%20Alemán,%20estoy%20buscando%20un%20producto%20electrónico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-green-500 hover:text-green-400 font-bold"
          >
            <FaWhatsapp />
            Consultanos por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default Products;
import { FaWhatsapp, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
const menu = [
{
name: "Inicio",
link: "#inicio",
},
{
name: "Servicios",
link: "#servicios",
},
{
name: "Trabajos",
link: "#trabajos",
},
{
name: "TV Usados",
link: "#usados",
},
{
name: "Opiniones",
link: "#opiniones",
},
{
name: "Ubicación",
link: "#ubicacion",
},
{
name: "Contacto",
link: "#contacto",
},
];

return (
<motion.header
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.6 }}
className="
fixed
top-0
left-0
w-full
z-50
bg-zinc-950/80
backdrop-blur-lg
border-b
border-zinc-800
"
> <div
     className="
       max-w-7xl
       mx-auto
       px-6
       py-4
       flex
       items-center
       justify-between
     "
   >
{/* LOGO */}

```
    <a
      href="#inicio"
      className="flex items-center gap-3"
    >
      <div
        className="
          bg-blue-600
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
        "
      >
        <FaTools className="text-white text-2xl" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          Electrónica{" "}
          <span className="text-blue-500">
            El Alemán
          </span>
        </h1>

        <p className="text-xs text-zinc-400">
          Reparación electrónica profesional
        </p>
      </div>
    </a>

    {/* MENU */}

    <nav className="hidden lg:flex gap-7 items-center">

      {menu.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="
            text-zinc-300
            hover:text-blue-500
            transition
            text-sm
            font-medium
          "
        >
          {item.name}
        </a>
      ))}

      {/* MERCADO PAGO */}

      <a
        href="https://link.mercadopago.com.ar/electronicaelaleman"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          gap-2
          bg-white
          hover:bg-zinc-100
          px-4
          py-2
          rounded-xl
          transition
          shadow-md
        "
      >
        <img
          src="/mercado-pago.png"
          alt="Mercado Pago"
          className="h-8 w-auto object-contain"
        />

        <span className="text-sky-600 font-bold text-sm">
          Mercado Pago
        </span>
      </a>

    </nav>

    {/* WHATSAPP */}

    <a
      href="https://wa.me/5492236988833?text=Hola%20Electronica%20El%20Aleman"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-2
        bg-green-600
        hover:bg-green-500
        px-5
        py-3
        rounded-xl
        font-bold
        transition
      "
    >
      <FaWhatsapp />

      <span className="hidden md:block">
        WhatsApp
      </span>
    </a>

  </div>
</motion.header>
);
}

export default Header;

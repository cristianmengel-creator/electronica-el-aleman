import { FaWhatsapp, FaTools, FaLock } from "react-icons/fa";
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

  // PIN SECRETO: Podés cambiar el "1234" por la clave numérica que prefieras
  const PIN_SECRETO = "1298";

  const accederRutaPrivada = (e: React.MouseEvent<HTMLAnchorElement>, ruta: string) => {
    e.preventDefault();
    const pinIngresado = prompt("Ingresá el PIN de seguridad de El Alemán:");
    
    if (pinIngresado === PIN_SECRETO) {
      window.location.href = ruta;
    } else if (pinIngresado !== null) {
      alert("❌ PIN incorrecto. Acceso denegado.");
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
            <FaTools className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white whitespace-nowrap">
              Electrónica{" "}
              <span className="text-blue-500">El Alemán</span>
            </h1>

            <p className="text-xs text-zinc-400">
              Reparación electrónica profesional
            </p>
          </div>
        </a>

        {/* MENU */}
        <nav className="hidden lg:flex gap-6 items-center flex-1 justify-center">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-zinc-300 hover:text-blue-500 transition text-sm font-medium whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}

          {/* MERCADO PAGO CONTROLADO */}
          <a
            href="https://mercadopago.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-zinc-100 px-3 py-1.5 rounded-xl transition shadow-md flex-shrink-0 min-w-[130px]"
          >
            <img
              src="/mercado-pago.png"
              alt="Mercado Pago"
              className="h-6 w-8 object-contain flex-shrink-0"
            />

            <span className="text-sky-600 font-bold text-xs whitespace-nowrap">
              Mercado Pago
            </span>
          </a>
        </nav>

        {/* BOTONES PRIVADOS Y WHATSAPP */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Botón Nueva Orden */}
          <a
            href="/admin"
            onClick={(e) => accederRutaPrivada(e, "/admin")}
            className="flex items-center justify-center gap-1.5 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap"
            title="Cargar nuevo equipo"
          >
            <FaLock className="text-zinc-500 text-xs flex-shrink-0" />
            <span>+ Orden</span>
          </a>

          {/* Botón Listado de Taller */}
          <a
            href="/listado"
            onClick={(e) => accederRutaPrivada(e, "/listado")}
            className="flex items-center justify-center gap-1.5 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap"
          >
            <FaLock className="text-zinc-500 text-xs flex-shrink-0" />
            <span>Ver Taller</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2.5 rounded-xl font-bold text-white transition text-xs md:text-sm whitespace-nowrap"
          >
            <FaWhatsapp className="text-base md:text-xl flex-shrink-0" />

            <span className="hidden md:block">
              WhatsApp
            </span>
          </a>
        </div>

      </div>
    </motion.header>
  );
}

export default Header;

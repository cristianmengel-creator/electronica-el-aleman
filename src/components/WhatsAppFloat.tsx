import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5492236988833?text=Hola%20Electrónica%20El%20Alemán,%20quiero%20consultar%20por%20una%20reparación"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-600
        hover:bg-green-500
        text-white
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-lg
        transition
      "
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}

export default WhatsAppFloat;
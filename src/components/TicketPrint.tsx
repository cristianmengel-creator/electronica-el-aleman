import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaTools } from "react-icons/fa";

interface ReparacionData {
  numero_reparacion: string;
  nombre: string;
  telefono: string;
  direccion: string;
  marca: string;
  modelo: string;
  falla_reportada: string;
  monto_presupuesto: string;
  fecha_ingreso: string;
}

export default function TicketPrint() {
  const location = useLocation();
  const navigate = useNavigate();
  const datos = location.state as ReparacionData;

  // Forzar la apertura del cuadro de impresión apenas cargue la página
  useEffect(() => {
    if (datos) {
      setTimeout(() => {
        window.print();
      }, 500);
    }
  }, [datos]);

  if (!datos) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-4">
        <p>No se encontraron datos para generar el remito.</p>
        <button onClick={() => navigate("/listado")} className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-bold">Volver al Listado</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-8 font-sans printable-area">
      {/* BOTON VOLVER (Se oculta al imprimir automáticamente) */}
      <div className="mb-6 flex justify-between items-center print:hidden bg-zinc-900 p-4 rounded-xl text-white">
        <span className="text-sm text-zinc-400">Vista previa del remito de orden {datos.numero_reparacion}</span>
        <button 
          onClick={() => navigate("/listado")} 
          className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-xs font-bold transition border border-zinc-700"
        >
          ← Volver al Listado
        </button>
      </div>

      {/* DISEÑO DEL REMITO (Duplicado para Taller y Cliente en la misma hoja) */}
      {[1, 2].map((tipo, index) => (
        <div key={tipo} className={`max-w-3xl mx-auto p-6 border-2 border-dashed border-zinc-400 rounded-xl bg-white ${index === 1 ? "mt-12 pt-12 border-t-2 border-dashed border-zinc-400" : ""}`}>
          
          {/* ENCABEZADO */}
          <div className="flex justify-between items-start border-b-2 border-black pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center">
                <FaTools className="text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-black uppercase tracking-tight">Electrónica El Alemán</h1>
                <p className="text-xs text-zinc-600 font-medium">Reparación electrónica profesional</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold uppercase border border-black px-2 py-0.5 bg-zinc-100 rounded">
                {tipo === 1 ? "Original Taller" : "Duplicado Cliente"}
              </span>
              <h2 className="text-lg font-black text-blue-600 mt-1">ORDEN: {datos.numero_reparacion}</h2>
              <p className="text-xs text-zinc-500">Fecha: {new Date(datos.fecha_ingreso).toLocaleDateString()}</p>
            </div>
          </div>

          {/* DATOS EN DOS COLUMNAS */}
          <div className="grid grid-cols-2 gap-6 my-4 text-xs">
            {/* BLOQUE CLIENTE */}
            <div className="border-r border-zinc-200 pr-4">
              <h3 className="font-bold uppercase text-zinc-700 mb-1.5 border-b border-zinc-200 pb-0.5">Datos del Cliente</h3>
              <p className="mb-0.5"><span className="font-semibold text-zinc-600">Nombre:</span> {datos.nombre}</p>
              <p className="mb-0.5"><span className="font-semibold text-zinc-600">Teléfono:</span> {datos.telefono}</p>
              <p><span className="font-semibold text-zinc-600">Dirección:</span> {datos.direccion || "No especificada"}</p>
            </div>

            {/* BLOQUE EQUIPO */}
            <div>
              <h3 className="font-bold uppercase text-zinc-700 mb-1.5 border-b border-zinc-200 pb-0.5">Especificaciones del Equipo</h3>
              <p className="mb-0.5 font-bold"><span className="font-semibold text-zinc-600">Equipo/Marca:</span> {datos.marca}</p>
              <p className="mb-0.5"><span className="font-semibold text-zinc-600">Modelo:</span> {datos.modelo}</p>
              <p><span className="font-semibold text-zinc-600">Presupuesto Inicial:</span> <span className="font-bold text-zinc-900">${datos.monto_presupuesto}</span></p>
            </div>
          </div>

          {/* SINTOMAS Y FALLA */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3 my-4 text-xs">
            <h3 className="font-bold uppercase text-zinc-700 mb-1">Detalle de la Falla / Síntomas reportados:</h3>
            <p className="italic text-zinc-800">{datos.falla_reportada || "El cliente no especificó detalles adicionales de la falla."}</p>
          </div>

          {/* TERMINOS Y CONDICIONES (PIE DEL REMITO) */}
          <div className="mt-4 pt-2 border-t border-zinc-200 text-[10px] text-zinc-500 leading-tight">
            <p className="font-semibold text-zinc-700 mb-0.5">Condiciones del Servicio Técnico:</p>
            <p>1. Los presupuestos tienen una validez de 15 días a partir de la fecha de notificación.</p>
            <p>2. Todo equipo retirado cuenta con garantía sobre la reparación efectuada, no cubriendo fallas ajenas a la misma.</p>
            <p>3. Pasados los 90 días del aviso de retiro, el taller no se responsabiliza por la permanencia del equipo en el local.</p>
            
            <div className="flex justify-between items-end mt-8">
              <p className="text-[9px]">Electrónica El Alemán • Mar del Plata, Argentina</p>
              <div className="w-40 border-t border-zinc-600 text-center pt-1 text-zinc-600 font-medium">
                Firma Conforme Cliente
              </div>
            </div>
          </div>

        </div>
      ))}

      {/* ESTILOS CSS INLINE EXCLUSIVOS PARA CONTROLAR LA IMPRESION */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; padding: 0 !important; }
          .print\\:hidden { display: none !important; }
          .printable-area { padding: 0 !important; }
          @page { margin: 1.5cm; }
        }
      `}</style>
    </div>
  );
}

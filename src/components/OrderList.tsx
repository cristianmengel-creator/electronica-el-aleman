import React, { useState, useEffect } from "react";

interface Reparacion {
  id_reparacion: number;
  numero_reparacion: string;
  nombre: string;
  telefono: string;
  direccion: string;
  marca: string;
  modelo: string;
  falla_reportada: string;
  monto_presupuesto: string;
  reparado: boolean;
  fecha_ingreso: string;
  fecha_salida: string | null;
}

export default function OrderList() {
  const [reparaciones, setReparaciones] = useState<Reparacion[]>([]);
  const [filtro, setFiltro] = useState("todos");

  const obtenerDatos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reparaciones");
      const datos = await response.json();
      if (Array.isArray(datos)) {
        setReparaciones(datos);
      }
    } catch (error) {
      console.error("Error al traer reparaciones:", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const alternarEstado = async (id: number, estadoActual: boolean) => {
    const nuevoEstado = !estadoActual;
    const fechaSalida = nuevoEstado ? new Date().toISOString().split('T')[0] : null;

    try {
      const response = await fetch(`http://localhost:5000/api/reparaciones/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reparado: nuevoEstado, fecha_salida: fechaSalida }),
      });

      const resultado = await response.json();
      if (resultado.success) {
        obtenerDatos();
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  const listaFiltrada = reparaciones.filter((rep) => {
    if (filtro === "taller") return !rep.reparado;
    if (filtro === "reparados") return rep.reparado;
    return true;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          Control de Taller: <span className="text-blue-500">Historial y Estados</span>
        </h2>
        <p className="text-center text-zinc-400 mb-8 text-sm">
          Visualizá el estado de los equipos y dales salida al terminar la reparación.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          <button onClick={() => setFiltro("todos")} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filtro === "todos" ? "bg-blue-600 text-white" : "bg-zinc-900 text-zinc-400 border border-zinc-800"}`}>
            Todos ({reparaciones.length})
          </button>
          <button onClick={() => setFiltro("taller")} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filtro === "taller" ? "bg-amber-600 text-white" : "bg-zinc-900 text-zinc-400 border border-zinc-800"}`}>
            En Taller ({reparaciones.filter(r => !r.reparado).length})
          </button>
          <button onClick={() => setFiltro("reparados")} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${filtro === "reparados" ? "bg-green-600 text-white" : "bg-zinc-900 text-zinc-400 border border-zinc-800"}`}>
            Reparados ({reparaciones.filter(r => r.reparado).length})
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase text-xs tracking-wider">
                  <th className="pb-3 font-semibold">Orden</th>
                  <th className="pb-3 font-semibold">Cliente / Contacto</th>
                  <th className="pb-3 font-semibold">Equipo / Modelo</th>
                  <th className="pb-3 font-semibold">Falla Reportada</th>
                  <th className="pb-3 font-semibold">Presupuesto</th>
                  <th className="pb-3 font-semibold text-center">Estado (Clic para cambiar)</th>
                  <th className="pb-3 font-semibold">Fecha Salida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {listaFiltrada.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-zinc-500">
                      No se encontraron registros en esta categoría.
                    </td>
                  </tr>
                ) : (
                  listaFiltrada.map((rep) => (
                    <tr key={rep.id_reparacion} className="hover:bg-zinc-950/30 transition">
                      <td className="py-4 font-bold text-blue-400">{rep.numero_reparacion}</td>
                      <td className="py-4">
                        <span className="font-medium block text-white">{rep.nombre}</span>
                        <span className="text-zinc-400 text-xs block">{rep.telefono}</span>
                        <span className="text-zinc-600 text-xs block truncate max-w-xs">{rep.direccion || "Sin dirección"}</span>
                      </td>
                      <td className="py-4">
                        <span className="font-semibold block text-zinc-200">{rep.marca}</span>
                        <span className="text-zinc-500 text-xs block">{rep.modelo}</span>
                      </td>
                      <td className="py-4 text-zinc-400 text-xs max-w-xs">
                        <p className="line-clamp-2">{rep.falla_reportada || "No especificada"}</p>
                      </td>
                      <td className="py-4 text-emerald-400 font-bold">${rep.monto_presupuesto}</td>
                      <td className="py-4 text-center">
                        <button
                          type="button"
                          onClick={() => alternarEstado(rep.id_reparacion, rep.reparado)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm border ${
                            rep.reparado
                              ? "bg-green-950/80 text-green-400 border-green-800 hover:bg-green-900"
                              : "bg-amber-950/80 text-amber-400 border-amber-800 hover:bg-amber-900"
                          }`}
                        >
                          {rep.reparado ? "🟢 Reparado" : "🔴 En Taller"}
                        </button>
                      </td>
                      <td className="py-4 text-zinc-400 text-xs font-medium">
                        {rep.fecha_salida
                          ? new Date(rep.fecha_salida).toLocaleDateString()
                          : "-- / -- / ----"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

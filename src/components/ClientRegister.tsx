import React, { useState } from "react";

export default function ClientRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    numero_reparacion: "",
    tipo_equipo: "Smart TV",
    marca: "",
    modelo: "",
    falla_reportada: "",
    monto_presupuesto: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setMensaje("");

    try {
      const response = await fetch("http://localhost:5000/api/reparaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          direccion: formData.direccion,
          telefono: formData.telefono,
          numero_reparacion: formData.numero_reparacion,
          marca: `${formData.tipo_equipo} ${formData.marca}`,
          modelo: formData.modelo,
          falla_reportada: formData.falla_reportada,
          monto_presupuesto: formData.monto_presupuesto
        }),
      });

      const resultado = await response.json();

      if (resultado.success) {
        setMensaje("✅ ¡Orden de reparación y cliente guardados con éxito en PostgreSQL!");
        setFormData({
          nombre: "",
          direccion: "",
          telefono: "",
          numero_reparacion: "",
          tipo_equipo: "Smart TV",
          marca: "",
          modelo: "",
          falla_reportada: "",
          monto_presupuesto: "",
        });
      } else {
        setMensaje("❌ Error al guardar en la base de datos.");
      }
    } catch (error) {
      console.error(error);
      setMensaje("❌ No se pudo conectar con el servidor backend (Puerto 5000).");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">
          Panel Interno: <span className="text-blue-500">Nueva Orden</span>
        </h2>
        <p className="text-center text-zinc-400 mb-8 text-sm">
          Ingreso técnico de equipos para control de taller.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          {mensaje && (
            <div className={`p-4 mb-6 rounded-xl font-medium text-sm text-center ${
              mensaje.includes("✅") ? "bg-green-950/80 text-green-400 border border-green-800" : "bg-red-950/80 text-red-400 border border-red-800"
            }`}>
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Nombre del Cliente"
                className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="Teléfono"
                className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
              />
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Dirección particular"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <input
                type="text"
                name="numero_reparacion"
                value={formData.numero_reparacion}
                onChange={handleChange}
                required
                placeholder="Número de reparación (Ej: #001)"
                className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="number"
                name="monto_presupuesto"
                value={formData.monto_presupuesto}
                onChange={handleChange}
                placeholder="Presupuesto Estimado ($)"
                className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
              />
              <select
                name="tipo_equipo"
                value={formData.tipo_equipo}
                onChange={handleChange}
                className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 text-sm"
              >
                <option value="Smart TV">Smart TV</option>
                <option value="Notebook">Notebook</option>
                <option value="Celular">Celular</option>
                <option value="Otro equipo">Otro equipo</option>
              </select>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                required
                placeholder="Marca (Ej: LG, Samsung)"
                className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
              />
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  required
                  placeholder="Modelo exacto del equipo"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <textarea
              name="falla_reportada"
              value={formData.falla_reportada}
              onChange={handleChange}
              placeholder="Describí la falla del equipo..."
              rows={4}
              className="bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 text-sm resize-none"
            />

            <button
              type="submit"
              disabled={cargando}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl transition text-sm tracking-wide shadow-lg"
            >
              {cargando ? "Guardando Registro..." : "Registrar en Base de Datos"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

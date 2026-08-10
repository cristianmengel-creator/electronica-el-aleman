import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 1. RUTA PARA GUARDAR UNA REPARACIÓN
app.post('/api/reparaciones', async (req, res) => {
  const { nombre, direccion, telefono, numero_reparacion, marca, modelo, falla_reportada, monto_presupuesto } = req.body;
  try {
    const clienteRes = await pool.query(
      'INSERT INTO clientes (nombre, direccion, telefono) VALUES ($1, $2, $3) RETURNING id_cliente',
      [nombre, direccion, telefono]
    );
    const id_cliente = clienteRes.rows[0].id_cliente;

    const reparacionRes = await pool.query(
      `INSERT INTO reparaciones 
      (id_cliente, numero_reparacion, marca, modelo, falla_reportada, monto_presupuesto) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [id_cliente, numero_reparacion, marca, modelo, falla_reportada, monto_presupuesto || 0]
    );
    res.status(201).json({ success: true, data: reparacionRes.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al registrar en la base de datos' });
  }
});

// 2. RUTA PARA LISTAR TODAS LAS REPARACIONES
app.get('/api/reparaciones', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT r.*, c.nombre, c.telefono, c.direccion 
      FROM reparaciones r 
      JOIN clientes c ON r.id_cliente = c.id_cliente
      ORDER BY r.fecha_ingreso DESC
    `);
    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el listado del taller' });
  }
});

// 3. RUTA PARA ACTUALIZAR ESTADO (MARCAR REPARADO / DAR SALIDA)
app.put('/api/reparaciones/:id', async (req, res) => {
  const { id } = req.params;
  const { reparado, fecha_salida } = req.body;

  try {
    const resultado = await pool.query(
      `UPDATE reparaciones 
       SET reparado = $1, fecha_salida = $2 
       WHERE id_reparacion = $3 RETURNING *`,
      [reparado, fecha_salida || null, id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'No se encontró la reparación' });
    }

    res.json({ success: true, data: resultado.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al actualizar el estado en el taller' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor de Electrónica El Alemán corriendo en puerto ${PORT}`);
});

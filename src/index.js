require('dotenv').config(); // Para cargar las variables de entorno desde un archivo .env
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Middleware
app.use(cors()); // Permite solicitudes desde cualquier origen (útil para evitar errores de CORS)
app.use(express.json()); // Permite analizar las solicitudes con formato JSON

// Importar las rutas de autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento');
});

// Configura el puerto en el que correrá el servidor
const PORT = process.env.PORT || 4000; // Aquí usamos el puerto que Render nos asignará
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

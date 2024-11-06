require('dotenv').config(); // Para cargar las variables de entorno desde un archivo .env
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Middleware
app.use(cors()); // Permite solicitudes desde cualquier origen (útil para evitar errores de CORS)
app.use(express.json()); // Permite analizar las solicitudes con formato JSON

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Usaremos una variable de entorno para la URL de la base de datos
  ssl: {
    rejectUnauthorized: false // Importante si estás usando Render y la base de datos requiere SSL
  }
});

// Definir la ruta para autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Configura el puerto en el que correrá el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

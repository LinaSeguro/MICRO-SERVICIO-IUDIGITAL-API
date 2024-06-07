const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/db'); // Ruta relativa al archivo db.js
const proyectoRoutes = require('./routes/proyectoRoutes');
const { PORT } = require('./config/config');

// Obtener express
const app = express();

// Middleware
app.use(bodyParser.json());

// Conectar a la base de datos
connectDB();

// Rutas para la entidad de Proyecto
app.use('/proyecto', proyectoRoutes);


// Obtener Puerto
app.listen(PORT, () => {
  console.log('Servidor escuchando en', PORT);
});

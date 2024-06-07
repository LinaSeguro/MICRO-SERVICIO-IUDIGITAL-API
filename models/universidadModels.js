const mongoose = require('mongoose');

const universidadModels = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String },
  telefono: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Universidad', universidadModels);

const mongoose = require('mongoose');

const etapaModels = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Etapa', etapaModels);

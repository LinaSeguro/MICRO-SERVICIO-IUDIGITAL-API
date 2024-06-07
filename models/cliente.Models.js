const mongoose = require('mongoose');

const clienteModels = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', clienteModels);

const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  numero: { type: String, unique: true, required: true },
  titulo: { type: String, required: true },
  fechaInicio: { type: Date },
  fechaEntrega: { type: Date },
  valor: { type: Number },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  tipoProyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoProyecto' },
  universidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Universidad' },
  etapaProyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Etapa' },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
}, { collection: 'proyectos' });

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;

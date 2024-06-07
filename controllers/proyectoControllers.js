const Proyecto = require('../models/proyectoModels');

class ProyectoControllers {
  async getAll(req, res) {
    console.log('Peticion a getProyectos.....')
    try {
      const proyectos = await Proyecto.find();
      console.log('Todos los proyectos fueron obtenidos correctamente.');
      res.json(proyectos);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
      res.status(500).json({ message: 'Se produjo un error interno al obtener los proyectos.' });
    }
  }

  async getProyectoById(req, res) {
    const id = req.params.id;
    try {
      const proyecto = await Proyecto.findById(id);
      if (!proyecto) {
        return res.status(404).json({ message: 'Proyecto no encontrado.' });
      }
      console.log('Proyecto obtenido por ID correctamente.');
      res.json(proyecto);
    } catch (error) {
      console.error("Error al obtener el proyecto por ID:", error.message);
      res.status(500).json({ error: 'Se produjo un error interno al obtener el proyecto.' });
    }
  }


  async create(req, res) {
    try {
      const proyecto = new Proyecto(req.body);
      const newProyecto = await proyecto.save();
      console.log('Proyecto creado exitosamente.');
      res.status(201).json({ message: 'Proyecto creado exitosamente.'});
    } catch (error) {
      console.error("Error al crear el proyecto:", error.message);
      res.status(400).json({ message: 'Error al crear el proyecto.', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!proyecto) {
        console.log('Proyecto no encontrado para actualizar.');
        return res.status(404).json({ message: 'Proyecto no encontrado.' });
      }
      console.log('Proyecto actualizado exitosamente.');
      res.json({ message: 'Proyecto actualizado exitosamente.'});
    } catch (error) {
      console.error("Error al actualizar el proyecto:", error.message);
      res.status(400).json({ message: 'Error al actualizar el proyecto.', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const proyecto = await Proyecto.findByIdAndDelete(req.params.id);
      if (!proyecto) {
        console.log('Proyecto no encontrado para eliminar.');
        return res.status(404).json({ message: 'Proyecto no encontrado.' });
      }
      console.log('Proyecto eliminado exitosamente.');
      res.json({ message: 'Proyecto eliminado exitosamente.' });
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error.message);
      res.status(500).json({ message: 'Se produjo un error interno al eliminar el proyecto.', error: error.message });
    }
  }
}

module.exports = new ProyectoControllers();

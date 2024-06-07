const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoControllers');

router.get('/', proyectoController.getAll);
router.get('/:id', proyectoController.getAll);
router.post('/', proyectoController.create);
router.put('/:id', proyectoController.update);
router.delete('/:id', proyectoController.delete);

module.exports = router;

const routeMascota = require('express').Router();
const controllerMascota = require('../../controllers/mascota.controller.js');

// Routes
routeMascota.get('/', controllerMascota.getAllMascotas);
routeMascota.get('/:id', controllerMascota.getOneMascota); 
routeMascota.post('/', controllerMascota.createMascota);
routeMascota.patch('/:id', controllerMascota.updateMascota);
routeMascota.delete('/:id', controllerMascota.deleteMascota);

module.exports = routeMascota;
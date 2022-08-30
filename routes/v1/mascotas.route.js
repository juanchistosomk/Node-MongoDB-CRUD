const routeMascota = require('express').Router();
const controllerMascota = require('./controllers/mascotas.controller.js');

routeMascota.get('/mascotas', controllerMascota.getAllMascotas);


module.exports = routeMascota;
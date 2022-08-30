const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaschema=  new Schema({
    nombre: String,
    edad: Number,
    descripcion: String,
    fecha: { type : Date,  default: Date.now }
});

const Mascota = mongoose.model('Mascota', mascotaschema);

module.exports = Mascota;
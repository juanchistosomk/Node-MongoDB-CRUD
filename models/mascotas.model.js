const mongoose = require('mongoose');
const mascotaschema=  new Schema({
    nombre: String,
    edad: Int32,
    descripcion: String
});

const Mascota = mongoose.model('Mascota', mascotaschema);

module.exports = Mascota;
const mongoose = require('mongoose');
const Mascota = require('./models/mascotas.model.js');

async getMascotas(req, res) => {
    try 
    {
      const results = await Mascota.find();

    } catch (err) {
        console.error(`Error getMascotas ${err}`);
    }
}


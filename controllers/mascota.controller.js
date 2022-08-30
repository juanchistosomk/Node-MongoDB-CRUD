const mongoose = require("mongoose");
const Mascota = require("../models/mascotas.model.js");

const getAllMascotas = async (req, res) => {
  try {
    const results = await Mascota.find();
    if(!results) 
      return res.send({ message: "No hay resultados encontrados" }); 
    return res.status(200).send(results);
  } catch (err) {
    res.status(400).send({ message : error.message });
    console.error(`Error getMascotas: ${err}`);
  }
};

const getOneMascota = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Mascota.findOne({ _id : id});
    if(!result) 
       return res.send({ message: "No hay resultados" });
    return res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message : error });
    console.error("Error getOneMascota: ", error);
  }
};

const createMascota = async (req,res) => {
  const body = req.body
  try {    
    await Mascota.create(body);
    return res.status(201).send({ message: "Mascota creada correctamente"});
  } catch (error) {
    res.status(400).send({ message : error.message });
    console.error("Error createMascota: ",error);
  }
}

const updateMascota = async (req,res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    if(!id)
      return res.status(400).send({ message : "Debe ingresar el id para actualizar" });
    await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false });
    return res.status(200).send({ message: "Mascota actualizada correctamente"});
  } catch (error) {
    res.status(400).send({ message : error.message });
    console.error("Error updateMascota: ",error);
  }
}

const deleteMascota = async (req, res) => {
  const id = req.params.id;
  try {
    if(!id)
      return res.status(400).send({ message : "Debe ingresar el id para eliminar" });
    const resul = await Mascota.findByIdAndDelete({ _id: id});
    if(!resul)
      return res.status(400).send({ message : "No se pudo elimiar" });
    return res.status(200).send({ message: "Mascota eliminada"});
  } catch (error) {
    res.status(400).send({ message : error.message });
    console.error("Error deleteMascota: ",error);
  }
}

module.exports = { getAllMascotas, getOneMascota, createMascota, updateMascota, deleteMascota  };

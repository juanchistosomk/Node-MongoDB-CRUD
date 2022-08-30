const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const app= express();
const PORT = process.env.PORT || 4000;
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.qd13p.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
                .then((con) => console.log("Base de datos MongoDB conectada!"))
                .catch((error) => console.error(error));

app.use(express.json()); // Middlewares
app.use(express.urlencoded({ extended : true })); //

//Routes
app.use('/v1/', require('./routes/v1/mascotas.route.js'));
////////////////////////////////

app.listen(PORT, () => console.log(`Servidor ejecutandose en puerto: ${PORT}`));

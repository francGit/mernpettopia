//crear una const de tipo express que manejara los hilos de nuestro archivo server.js
const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const router = require('./routes/router') //importacion de rutas para los End Points

//crear la conexion hacia la BD
const { stringConn } = require("./db/dbConnection");
mongoose
  .connect(stringConn)
  .then(() => console.log("Conexion a MongoDB exitosa"))
  .catch((err) => console.log(`Error del servidor: ${err}`));

//Creamos el parserBody de las peticiones HTTP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//enviar la const router para que app la ejecute
app.use("/api/v1", router);

//por medio de la const app activamos la escucha de nuestro server
app.listen(port, () => {
  console.log(`Server On Port: ${port}`);
});


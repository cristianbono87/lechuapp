const express = require("express");
const bodyParser = require("body-parser");
const database = require("./dbconnect");
const controladorClient = require('./controladorClientes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
<<<<<<< HEAD
app.get("/client", controladorClient.obtenerClientes);
app.get("/client/:id", controladorClient.obtenerClientesPorId);

app.post("/client", controladorClient.crearNuevoCliente);
=======
app.get("/ping", (req, res) => res.send("Lechu pong!"));
>>>>>>> 8970cb8edc5bd7576cae2c42c977fe185de091e9
=======
app.get("/ping", (req, res) => res.send("Just pong!"));
>>>>>>> 329bcda96918b9b221fd1eada4ded85b06254303

app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});

// Importa el modulo que conecta a la base de datos.
const mongoose = require("./conexionDb"),
  userSchema = require("./esquema").userSchema;
//Creacion de modelo de usuarios
const models = {
  User: mongoose.model("usuarios", userSchema),
};
//Exportamos los modelos de usuarios
module.exports = models;

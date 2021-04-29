//Importa el modelo de usuarios
const mongoose = require("./conexionDb");
const Schema = mongoose.Schema;

const schemas = {
  //Crea un nuevo esquema
  userSchema: new Schema({
    //Datos esquema de nuevo usuario
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    fechaCreacion: { type: String, required: true },
    fechaUltimoLogin: { type: String, required: true },
  }),
};

//Exporta el esquema de nuevo usuario
module.exports = schemas;

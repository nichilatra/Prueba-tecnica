require("dotenv").config();
const mongoose = require("mongoose");
let userDb = process.env.USERDB;
let passwordDb = process.env.PASSWORDDB;
let dbNameDb = process.env.DBNAMEDB;

//Url para conectarnos a mongodb
const uri = `mongodb+srv://${userDb}:${passwordDb}@cluster0.zjm0a.mongodb.net/${dbNameDb}?retryWrites=true&w=majority`;

// Conectarse a la base de datos
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Mensaje que nos dice que se conecto a la base de datos.
console.log("Conectando base de datos .. Mongo db");

module.exports = mongoose;

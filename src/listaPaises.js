require("dotenv").config();
const axios = require("axios");
//Se consume api publica de http://country.io/names.json

async function listarPaises() {
  try {
    let urlPaises = process.env.URLPAISES;
    let listadoPaises = await axios
      .get(urlPaises)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return "Error en la consulta del listado de paises";
      });

    return listadoPaises;
  } catch (error) {
    console.log("Error en el listado de paises: " + error);
    return false;
  }
}

module.exports = { listarPaises };

require("dotenv").config();
const axios = require("axios");

async function consultaClima(nombrePais) {
  try {
    let urlClima = process.env.URLCLIMA;
    let keyClima = process.env.KEYCLIMA;
    let infoClima = await axios
      .get(`${urlClima}${keyClima}&q=${nombrePais}&aqi=no`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return "Error en la consulta del clima";
      });
    return infoClima;
  } catch (error) {
    console.log("Error en la consulta del clima: " + error);
  }
}

module.exports = { consultaClima };

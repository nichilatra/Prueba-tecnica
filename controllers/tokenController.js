require("dotenv").config();
var jwt = require("jsonwebtoken");
var llaveprivada = process.env.LLAVEPRIVADA;

function crearToken(correo) {
  let payload = {
    correo: correo,
  };
  let tiempoExpiracion = { expiresIn: "1h" };
  let token = jwt.sign(payload, llaveprivada, tiempoExpiracion);
  return token;
}

function verificarToken(token) {
  try {
    var tokenDecoded = jwt.verify(token, llaveprivada);
    return tokenDecoded;
  } catch (error) {
    console.log("Error: " + error);
    return tokenDecoded;
  }
}

module.exports = {
  crearToken,
  verificarToken,
};

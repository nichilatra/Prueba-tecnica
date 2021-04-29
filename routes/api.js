const express = require("express");
const router = express.Router();
const { validacionToken } = require("../middleware/proteccionApi");
const { traerHistorialLogin } = require("../db/controladores");
const { listarPaises } = require("../src/listaPaises");
const { consultaClima } = require("../src/climaPaises");

router.get("/paises", validacionToken, async (req, res) => {
  let paises = await listarPaises();
  res.send(paises.data);
});

router.post("/climapais", validacionToken, async (req, res) => {
  let nombrePais = req.body.pais;
  let paises = await consultaClima(nombrePais);
  res.send(paises.data);
});

router.get("/usuarios", validacionToken, async (req, res) => {
  let historial = await traerHistorialLogin();
  res.send(historial);
});

module.exports = router;

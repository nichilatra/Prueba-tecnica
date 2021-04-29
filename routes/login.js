const express = require("express");
const router = express.Router();
const {
  traerUsuarioEmail,
  actualizacionFechaLogin,
} = require("../db/controladores");
const { crearToken } = require("../controllers/tokenController");
const { verificarContraseña } = require("../controllers/bcryptController");

router.post("/", async (req, res) => {
  let correo = req.body.correo;
  let datoUsuario = await traerUsuarioEmail(correo);
  let validacion = verificarContraseña(req.body.contraseña, datoUsuario);
  if (validacion) {
    let tokenUsuario = crearToken(correo);
    await actualizacionFechaLogin(correo);
    res.json(tokenUsuario);
  } else {
    res.status(401).send({ message: "Correo o contraseña incorrectos." });
  }
});

module.exports = router;

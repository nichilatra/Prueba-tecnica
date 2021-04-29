const express = require("express");
const router = express.Router();
const { crearUsuario } = require("../db/controladores");
const { hashingContraseña } = require("../controllers/bcryptController");
const {
  validadorCorreo,
  validadorNombreApellido,
} = require("../controllers/validadores");

router.post("/", async (req, res) => {
  //
  try {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let correo = req.body.correo;
    //
    let contraseña = hashingContraseña(req.body.contraseña);
    //
    if (!contraseña) {
      return res.status(400).send("Error en el request");
    }
    if (
      validadorCorreo(correo) &
      validadorNombreApellido(nombre) &
      validadorNombreApellido(apellidos)
    ) {
      let resultado = await crearUsuario(nombre, correo, contraseña, apellidos);
      res.status(200).json(resultado);
    } else {
      return res.status(400).send("Nombre o Correo invalidos");
    }
  } catch (error) {
    res.status(400).send("Error en el request");
  }
  //
});

module.exports = router;

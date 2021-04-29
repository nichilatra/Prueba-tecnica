require("dotenv").config();
const { verificarToken } = require("../controllers/tokenController");

function validacionToken(req, res, next) {
  try {
    let token = req.header("token");
    let verificacionToken = verificarToken(token);
    if (typeof verificacionToken === typeof undefined) {
      res.status(401).send({ message: "No autorizado" });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({ message: "No autorizado" });
  }
}

module.exports = { validacionToken };

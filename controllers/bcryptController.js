const bcrypt = require("bcrypt");

function hashingContraseña(contraseña) {
  try {
    let longitudContraseña = contraseña.length;
    if (longitudContraseña > 7) {
      let hashContraseña = bcrypt.hashSync(contraseña, 10);
      return hashContraseña;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function verificarContraseña(contraseña, hash) {
  try {
    let resultado = bcrypt.compareSync(contraseña, hash);
    return resultado;
  } catch (error) {
    return false;
  }
}

module.exports = {
  hashingContraseña,
  verificarContraseña,
};

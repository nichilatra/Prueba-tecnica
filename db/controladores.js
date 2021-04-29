var moment = require("moment");
//Importa el esquema de nuevo usuario
const usuario = require("./modelo").User;

async function crearUsuario(nombre, correo, contraseña, apellidos) {
  try {
    let fechaCreacion = moment().format("YYYY-MM-DD hh:mm:ss a");
    let fechaUltimoLogin = "Nunca Logueado";
    correo = correo.toLowerCase();
    let resultadoInsert = await usuario
      .create({
        nombre,
        correo,
        contraseña,
        apellidos,
        fechaCreacion,
        fechaUltimoLogin,
      })
      .then(() => {
        return { message: "Usuario creado correctamente:" + correo };
      })
      .catch((e) => {
        return { message: "Usuario no creado: " + e };
      });
    return resultadoInsert;
  } catch (e) {
    console.log("error creando el usuario: " + e);
    return { message: "Error:" + e };
  }
}

async function traerUsuarioEmail(correo) {
  correo = correo.toLowerCase();
  let resultUsuario = await usuario
    .find({ correo: correo })
    .then((usuario) => {
      return usuario[0].contraseña;
    })
    .catch((e) => {
      return false;
    });
  return resultUsuario;
}

async function traerHistorialLogin() {
  let resultHistorial = await usuario
    .find(
      {},
      { _id: 0, nombre: 1, correo: 1, fechaCreacion: 1, fechaUltimoLogin: 1 }
    )
    .lean()
    .then((historial) => {
      let result = JSON.stringify(historial);
      return result;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return resultHistorial;
}

async function actualizacionFechaLogin(correoUsuario) {
  correoUsuario = correoUsuario.toLowerCase();
  const filtro = { correo: correoUsuario };
  const actualizacion = {
    fechaUltimoLogin: moment().format("YYYY-MM-DD hh:mm:ss a"),
  };
  let resultActualizacion = await usuario
    .findOneAndUpdate(filtro, actualizacion, { useFindAndModify: false })
    .then(() => {})
    .catch((e) => {
      return false;
    });
}

module.exports = {
  crearUsuario,
  traerUsuarioEmail,
  actualizacionFechaLogin,
  traerHistorialLogin,
};

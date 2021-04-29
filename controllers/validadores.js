function validadorCorreo(texto) {
  var formatoCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (formatoCorreo.test(texto)) {
    return true;
  } else {
    return false;
  }
}

function validadorNombreApellido(texto) {
  let caracteresExpresionRegular = /^[a-zA-Z ]{2,30}$/;
  if (caracteresExpresionRegular.test(texto)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  validadorCorreo,
  validadorNombreApellido,
};

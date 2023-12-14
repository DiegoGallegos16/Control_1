const nombreUsuario = prompt("Ingrese un nombre de usuario:");
function esNombreUsuarioValido(nombreUsuario) {
  if (nombreUsuario.length < 9) {
    return false;
  }
  if (!/^[0-9].*[a-zA-Z]$/.test(nombreUsuario)) {
    return false;
  }
  if (!/[a-zA-Z]/.test(nombreUsuario) || !/[0-9]/.test(nombreUsuario)) {
    return false;
  }
  return true;
}
if (esNombreUsuarioValido(nombreUsuario)) {
  alert("El nombre de usuario es válido.");
} else {
  alert("El nombre de usuario no cumple con los requisitos solicitados.");
}

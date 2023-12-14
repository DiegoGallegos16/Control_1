const puntuacion = parseFloat(prompt("Ingrese la puntuación de evaluación del trabajador (0.0, 0.2, 0.4, 0.6 o 0.8):"));
let nivel = "";

switch (puntuacion) {
  case 0.0:
  case 0.2:
    nivel = "Insuficiente";
    break;
  case 0.4:
    nivel = "Aceptable";
    break;
  case 0.6:
    nivel = "Meritorio";
    break;
  case 0.8:
    nivel = "Excelente";
    break;
  default:
    nivel = "Puntuación no válida";
}

const cantidadDinero = 250000 * puntuacion;
if (nivel !== "Puntuación no válida") {
  alert(`Nivel: ${nivel}\nLa cantidad de dinero conseguida es: $${cantidadDinero}`);
} else {
  alert(nivel);
}
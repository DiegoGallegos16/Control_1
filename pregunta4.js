function calcularTotalConIVA(cantidadSinIVA, porcentajeIVA = 19.5) {
    if (porcentajeIVA < 0 || porcentajeIVA > 100) {
      return "Porcentaje de IVA inválido";
    }
    const totalConIVA = cantidadSinIVA + (cantidadSinIVA * porcentajeIVA) / 100;
    return totalConIVA;
  }
  const cantidadSinIVA = parseFloat(prompt("Ingrese la cantidad sin IVA:"));
  const porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA (opcional):"));
  const total = calcularTotalConIVA(cantidadSinIVA, porcentajeIVA);
  if (typeof total === "number") {
    alert(`El total de la factura con ${porcentajeIVA}% de IVA es: ${total.toFixed(2)}`);
  } else {
    alert(total); // Mostrar mensaje de error si el porcentaje de IVA es inválido
  }
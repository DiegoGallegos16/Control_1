const frase = prompt("Ingrese una frase:");

const letra = prompt("Ingrese una letra:");

function contarLetraEnFrase(frase, letra) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      contador++;
    }
  }
  return contador;
}

const cantidad = contarLetraEnFrase(frase, letra);
console.log(`La letra "${letra}" aparece ${cantidad} veces en la frase: "${frase}"`);
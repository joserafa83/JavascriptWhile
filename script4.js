// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let capturas = []; // Arreglo para almacenar las palabras capturadas

let entrada = prompt("Ingresa una letra o palabra (deja vacío para terminar):");

while (entrada !== "") {
  capturas.push(entrada); // Agregar la entrada al arreglo
  entrada = prompt("Ingresa otra letra o palabra (deja vacío para terminar):");
}

let resultado = capturas.join(""); // Concatenar todas las palabras capturadas

console.log("Palabras capturadas:", resultado);

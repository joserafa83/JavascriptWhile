// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

let numeros = []; // Arreglo para almacenar los números capturados

let numero = parseInt(prompt("Ingresa un número (0 para terminar):"));

while (numero !== 0) {
  if (!isNaN(numero)) {
    // Verificar si el valor ingresado es un número
    numeros.push(numero); // Agregar el número al arreglo
  }

  numero = parseInt(prompt("Ingresa otro número (0 para terminar):"));
}

console.log("Números capturados:", numeros);

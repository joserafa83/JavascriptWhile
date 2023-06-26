// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let numero = parseInt(prompt("Ingresa un número:")); // Solicitar al usuario un número y convertirlo a entero

let i = 1; // Inicializar el contador en 1

while (i <= numero) {
  if (i % 5 === 0) {
    // Si el número es múltiplo de 5, mostrarlo en la consola
    console.log(i);
  }
  
  i++; // Incrementar el contador en 1
}
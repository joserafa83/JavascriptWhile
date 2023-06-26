// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

// Verificar que los números ingresados estén dentro del rango válido
if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
  console.log("Los números ingresados están fuera del rango válido.");
} else {
  let i = 1;

  while (i <= 50) {
    if (i === numero1 || i === numero2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }

    i++;
  }
}

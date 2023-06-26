// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let dia = prompt("Ingresa un día de la semana:");

dia = dia.toLowerCase();

while (dia !== "domingo") {
  switch (dia) {
    case "lunes":
      alert("¡Es lunes! Prepárate para una nueva semana.");
      break;
    case "martes":
      alert("¡Es martes! Ánimo, ya superaste el lunes.");
      break;
    case "miércoles":
      alert("¡Es miércoles! Mitad de semana, sigue adelante.");
      break;
    case "jueves":
      alert("¡Es jueves! El fin de semana está cada vez más cerca.");
      break;
    case "viernes":
      alert("¡Es viernes! El fin de semana está por comenzar.");
      break;
    case "sábado":
      alert("¡Es sábado! Disfruta y descansa.");
      break;
    default:
      alert("Día no reconocido. Ingresa un día de la semana válido.");
      break;
  }

  dia = prompt("Ingresa otro día de la semana:");
  dia = dia.toLowerCase();
}

alert("Ve a descansar. ¡Es domingo!");

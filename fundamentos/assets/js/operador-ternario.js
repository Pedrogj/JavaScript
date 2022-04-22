/* 
 Días de semana abrimos a las 11,
 pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 1; // 0: domingo, 1: lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
// otra manera
// if ([0, 6].includes(dia)) {
//   console.log("Fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Día de semana");
//   horaApertura = 11;
// }

// ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "Esta abierto";
// } else {
//   mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

// ternario
mensaje =
  horaActual >= horaApertura
    ? "Esta abierto"
    : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });

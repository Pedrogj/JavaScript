let a = 5;

if (a >= 10) {
  console.log(a, "es mayor a 10");
} else {
  console.log(a, "es menor a 10");
}

// console.log("Fin del programa");

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes...

console.log(hoy);
console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else {
  console.log("No es domingo");
}

// Sin usar If Else, o Switch, unicamente objetos
dia = 9;
const diasLetras = {
  0: "domingo",
  1: "lunes",
  2: "martes",
  3: "miércoles",
  4: "jueves",
  5: "viernes",
  6: "sábado",
};

console.log(diasLetras[dia] || "Dia no definido");

const elMayor = (a, b) => {
  return a > b ? a : b;
};

const tieneMembresia = (mienbro) => (mienbro ? "2.00 dolares" : "10 dolares");

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = [
  "juanito",
  "pablito",
  "felipe",
  amigo ? "juan" : "lucas",
  elMayor(20, 25),
];

console.log(amigosArr);

const nota = 94; // A+ A B+

const puntos =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 75
    ? "C+"
    : nota >= 70
    ? "C"
    : "F";

console.log({ nota, puntos });

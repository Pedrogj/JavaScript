const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

while (i < carros.length) {
  console.log(carros[i]);
  i++;
}

console.warn("Do While");

let b = 0;

do {
  console.log(carros[b]);
  b++;
} while (carros[b]);

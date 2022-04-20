// Objeto literal
let character = {
  name: "Tony Stark",
  codeName: "Iroman",
  live: false,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  direction: {
    zip: "1080, 90265",
    location: "Malibu, California",
  },
};

// console.log(character);
// console.log("Nombre", character.name);
// console.log("Nombre", character["name"]);
// console.log("Edad", character.age);
// console.log("Cordenadas", character.coords);
// console.log("Cordenadas", character.coords.lat);
// console.log("No. Trajes", character.suits.length);
// console.log("No. Trajes", character.suits[character.suits.length - 1]);

const x = "live";
// console.log("Vivo", character[x]);

// Mas detalles
delete character.age;

console.log(character);

// Crear una nueva propiedad en el objeto
character.married = true;

// Pares de valores
const entriesPairs = Object.entries(character);
console.log(entriesPairs);

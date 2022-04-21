function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}

// resumiendo codigo con arrow function
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...elements) => {
  //   console.log({ edad, elements });
  return elements;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "juanito",
  "hola"
);
console.log({ casado, vivo, nombre, saludo });

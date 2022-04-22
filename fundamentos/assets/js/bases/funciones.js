function saludar(name) {
  console.log("hola " + name);
}

const saludar2 = function (name) {
  console.log("Hola " + name);
};

const saludar3 = () => {
  console.log("hello world");
};

const saludar4 = (name) => {
  console.log("hello " + name);
};

// saludar("juanito");
// saludar2("laura");
// saludar3();
// saludar4("Peter");

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => {
  return a + b;
};

// resumiendo codigo
const sumar3 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

// Una funcion de flecha que no tenga llaves {}
// la funcion se va a llamar getAleatorio2

const getAleatorio2 = () => Math.random();

// console.log(sumar(1, 3));
// console.log(sumar2(5, 5));
// console.log(sumar3(10, 5));
console.log(getAleatorio2());

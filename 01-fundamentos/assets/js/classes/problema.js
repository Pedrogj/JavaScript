const adrian = {
  nombre: "Adrian",
  edad: 20,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const juan = {
  nombre: "Juan",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

// adrian.imprimir();
// juan.imprimir();

function Persona(nombre, edad) {
  console.log("se ejecuto esta linea");

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();

class Persona {
  static Objeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "Melissa";
const apellido1 = "Flores";
const pais = "Honduras";

const usuario = {
  nombre: "Juanito",
  apellido: "Perez",
  pais: "Costa Rica",
};

const persona1 = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.Objeto(usuario);

persona2.getInfo();

class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }
  static mensaje() {
    console.log("Hola a todos soy un metodo estático");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  // Set y Get
  set setComidaFavorita(comida) {
    this.comida = comida;
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Metodos
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderMan = new Persona("Peter Parker", "Spider", "Soy spiderman");
const ironMan = new Persona("Tony Stark", "Iron Man", "Soy Iron Man");

spiderMan.miFrase();
// ironMan.miFrase();

spiderMan.setComidaFavorita = "Pastel de cereza";

// console.log(spiderMan.getComidaFavorita);
// console.log(spiderMan);
// Persona._conteo = 2;
console.log("Conteo estático", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

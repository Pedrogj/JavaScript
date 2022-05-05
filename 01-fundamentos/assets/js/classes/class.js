class Persona {
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

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
// console.log(spiderMan, ironMan);

spiderMan.miFrase();
ironMan.miFrase();

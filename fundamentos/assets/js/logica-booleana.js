const regresaTrue = () => {
  console.log("regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("regresa false");
  return false;
};

console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn("And (&&)"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log("******* && *******");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.warn("OR - || "); // true si uno de los dos valores es verdadero
console.log(true || false); // true
console.log(false || false); // false

console.log("******* || *******");
console.log(regresaFalse() || regresaTrue());

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola mundo" && 234; // se le asigna el ultimo valor a la variable
const a2 = "Hola" && "Mundo" && true;
const a3 = soyFalso || "Ya no soy falso";
const a4 = soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo";

console.log({ a1, a2, a3, a4 });

if (true || true) {
  console.log("hacer algo");
} else {
  console.log("hacer otra cosa");
}

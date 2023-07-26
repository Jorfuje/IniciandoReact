// Sprear Operator ...
let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworks = ['React', 'Laravel', 'Django'];

// Unir los arreglos en uno solo
// Forma anterior
/* let combinacion = lenguajes.concat(frameworks);
console.log(combinacion); */

// Forma nueva
let combinacion = [...lenguajes,...frameworks];
console.log(combinacion);

let nuevoArreglo = [...lenguajes];
console.log(nuevoArreglo);

// Obtener el ultimo forma anterior
let [ultimo] = lenguajes.reverse();
lenguajes.reverse();

// Con spread
let [ultimoSpread] = [...lenguajes].reverse();
console.log(lenguajes);
console.log(ultimo);

function suma(a, b, c) {
    console.log(a + b + c);
}
const numeros = [ 1, 2, 3];
suma(...numeros);
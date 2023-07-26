// Arreglos y .map

// Imprimir con forEach
/* const carrito = ['producto1','producto2', 'producto3'];

console.log(carrito);
const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html; */

/* // Imprimir con .map
carrito = ["producto 1", "producto 2", "producto 3"];

carrito.map(producto => {
    return 'El producto es ' + producto;
});
 */

const persona = {
    nombre: 'Jorge',
    profesion: 'Desarrollador Web',
    edad: 37
}

console.log(persona);
const {nombre} = persona;
console.log(nombre);

console.log(Object.keys(persona));
// Template Strings

const nombre ='Jorge';
const trabajo = 'Desarrollador de JavaScript';

// Concatenar JavaScript
console.log('Nombre ' + nombre + ', trabajo ' + trabajo);
console.log(`Nombre  ${nombre}  trabajo  ${trabajo}`);

// Concatenar con múltiples lineas
const contenedorApp = document.querySelector('#app');
/* let html = '<ul>' +
            '<li>Nombre: ' + nombre + '</li>' +
            '<li>Trabajo: ' + trabajo + '</li>' +
            '</ul>'; */

let html = `
    <ul>
        <li>Nombre: ${nombre} </li>
        <li>Trabajo: ${trabajo} </li>
`;

contenedorApp.innerHTML = html;

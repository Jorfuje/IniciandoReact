// Destructuring de onjetos
const aprendiendoJs = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VeuJS', 'AngularJS']
}

// Destructuring es extraer valores de un objeto

// console.log(aprendiendoJs);

// Versión anterior
/* let version = aprendiendoJs.version;
let framework = aprendiendoJs.frameworks[1];
console.log(framework); */

// Versión nueva
let {nueva} = aprendiendoJs.version;
console.log(nueva);

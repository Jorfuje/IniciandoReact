// Métodos en arreglos

const personas = [
    {nombre: 'Jorge', edad: 23, aprendiendo: 'JavaScrip'},
    {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AbobeXD'},
    {nombre: 'Karen', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'},
]

console.log(personas);

// Mayores de 28 años

const mayores = personas.filter(persona =>{
    return persona.edad > 28;
});
console.log(mayores);

// Que aprende Alejadra y su edad

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});
console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo);
console.log('Alejandra tiene la edad de: ' + alejandra.edad + ' años.');

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(personas.length);
console.log(total);
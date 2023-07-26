// Util para atar ciertos metodos y funciones a objetos. 

// Object Literal
const persona = {
  nombre: "Jorge",
  profesion: "Desarrolo Web",
  edad: 12,
};

// console.log(persona);

/* const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
console.log(mostrarCliente); */

// Object Constructor
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

// Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

// Crear nueva tarea:
const tarea1 = new Tarea("Aprender JavaScrip y react", "Urgente");
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
const tarea2 = new Tarea("Pasear al perro", "Media");
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());

/* const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);

// console.log(tarea1);

console.log(mostrarInfo); */

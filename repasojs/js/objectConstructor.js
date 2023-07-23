// Objetos

// Object Constructor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear nueva tarea:

const tarea1 = new Tarea('Aprender JavaScrip y react', 'Urgente');
const tarea2 = new Tarea('Preparar cafe', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media')
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
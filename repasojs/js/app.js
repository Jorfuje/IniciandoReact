/* import { nombretarea, crearTarea, tareaCompletada } from "./tareas.js";

console.log(nombretarea);

const tarea1 = crearTarea('Pasear al perro', 'Media');

console.log(tarea1);

tareaCompletada(); */

import Tarea from "./compras.js";

const tarea1 = new Tarea('Aprendiendo JavaScript', 'Urgente');

console.log(tarea1);

tarea1.mostrar();
// Escribir clases

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  mostrar() {
    console.log(`${this.nombre} tienen una prioridad de ${this.prioridad}`);
  }
}

class Compraspendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }

  mostrar(){
    super.mostrar();
    console.log(` y una cantidad de ${this.cantidad}.`);
  }

  hola() {
    return 'Hola';
  }
}

// Crear objetos
let tarea1 = new Tarea("Aprender JavaScript", "Alta");

// console.log(tarea1.mostrar());

// Compras

let compra1 = new Compraspendientes("Jabón", "Urgente", 3);
compra1.mostrar();
console.log(compra1.hola());

// Arrow functions
/* Si solo es una línea se elimina el return y llaves, ya que se dan por hecho.  */
let viajando = (destino) => `Viajando a la ciudad de: ${destino}.`;

let viaje;
viaje = viajando("Paris");
viaje = viajando('Londres');
viaje = viajando('Barcelona');


console.log(viaje);
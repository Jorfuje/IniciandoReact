// Parametros por default en las funciones

// Function Declaration
/* function actividad(nombre = 'Walter White', actividad = 'Enseñar Química'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}.`);
}; */

// Function Expression
const actividad = function (nombre = "Walter White",actividad = "Enseñar Química") {
  console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}.`);
};

actividad("Jorge", "Aprender JavaScript");
actividad("Pedro", "Creando un sitio web");
actividad();
actividad("Antonio");

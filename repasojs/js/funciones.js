// Función

// Function Declaration
function saludar(nombre) {
  console.log("Bienvenido " + nombre);
}
saludar("Jorge");

// Function Expression

const cliente = function (nombreCliente) {
  console.log("Mostrando datos del cliente: " + nombreCliente);
};
cliente('Jorge');

/*  Function Declaration la puedes mandar a llamar antes o después de crearla.
    Function Expression primero debes de crear la función para mandar a llamar. */
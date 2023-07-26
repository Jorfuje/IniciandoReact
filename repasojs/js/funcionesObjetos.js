// Métodos o funciones en un objeto

const persona = {
  nombre: "Jorge",
  trabajo: "Desarrollador",
  edad: 36,
  musicaRock: true,
  mostrarInformacion() {
    console.log(`${this.nombre} es ${this.trabajo} y su edad es de ${this.edad}.`);
  }
};

persona.mostrarInformacion();

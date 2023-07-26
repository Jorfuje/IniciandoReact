// Onject enhancent poner valores juntos

const banda = "Metallica";
const genero = "Heavi metal";
const canciones = ["Mater", "Seek", "Enter"];

// Forma anterior
/* const Metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
} */

// Forma nueva
const Metallica = {banda, genero, canciones};

console.log(Metallica);
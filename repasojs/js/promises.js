// Promises o promesas

const descargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    // Pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // LLamado a ajax
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open("GET", api, true);

    // on load
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    // opcional
    xhr.onerror = (error) => reject(error);

    // send
    xhr.send();
  });

// Recuperar datos
/* descargarUsuarios(30).then(
  (miembros) => console.log(miembros),
  (error) => console.error(new Error("Hubo un error " + error))
); */


// Recuperar con una función para imprimir en nuestro HTML
descargarUsuarios(30).then(
  (miembros) => imprimirHTML(miembros),
  (error) => console.error(new Error("Hubo un error " + error))
);

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen: 
                    <img src="${usuario.picture.medium}">
        `
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
    
}

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //Le pasamos la cantidad de usuarios que vamos a descargar a la API 
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado Ajax
    const xhr = new XMLHttpRequest();

    //Abrir la conexión
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        //Por lo general se revisa la carga por medio del estado
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //Opcional on error
    xhr.onerror = (error) => reject(error);

    //enviar
    xhr.send();
});

descargarUsuarios(30).then(
    miembros => imprimirHtml(miembros),
    error => console.error(
        new Error (`Hubo un error: ${error}`)
    )
);

function imprimirHtml(miembros){
    let app = document.querySelector("#app");
    let html = `<ul>`;
    miembros.forEach(miembro => {
        html += `
            <li> 
                Nombre: ${miembro.name.first} ${miembro.name.last}
                Género: ${miembro.gender}
                Imagen: <img src="${miembro.picture.thumbnail}">
            </li>
        `;
    });
    html += `</ul>`;
    app.innerHTML = html;
}
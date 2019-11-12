function Tarea(nombre, urgencia){
    this.nombre = nombre,
    this.urgencia = urgencia
}

Tarea.prototype.mostrar = function(){
    return `la tarea es ${this.nombre} y su urgencia es  ${this.urgencia}`
}

let tarea = new Tarea('aprender react', 'urgente');

console.log(tarea.mostrar());

let nombre = 'metallica';
let genero = 'heavy metal';
let canciones = ['one','fuel','whiskey in de jar'];

//podemos crear el objeto asi
const banda = {
    nombre:nombre,
    genero:genero,
    canciones:canciones,
    mostrar: function(){
        return `nombre: ${nombre}, genero: ${genero}, canciones: ${canciones}`;
    }
};

console.log(banda.mostrar());
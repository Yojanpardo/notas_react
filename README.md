# Notas del curso de ReactJS de Udemy.

React no es un framework de javascript, es mas bien un conjunto de librerias que nos van a ayudar hacer el frontend de un sitio web conectandolo con diferentes APIs.  
Vamos a iniciar con un pequeño repaso de JavaScript e iremos subiendo de nivel a medida que vayamos completando el curso.  
 
## Variables en JavaScript
JavaScript es un lenguaje de programación no tipado, eso quiere decir que una variable bien puede ser un string, entero, boolean, flotante o lo que sea y no tendremos la necesidad de indicar que tipo de dato vamos a usar en dicha variable. A pesar de esto si encontramos 3 formas diferentes de declara variables en JS utilizando var, let y const, lo veremos acontinuación.  
~~~js
//Utilizando var podemos declarar variables que van a tener un alcance en todo el código
//es como decir que tiene un alcance global dentro de nuestro archivo de JS
var persona = 'yojan';

//si hago un cambio mas adelante en un bloque de código sobre la variable persona 
//entonces se va a ver afectada globalmente

if(true){
    var persona = 'antonio';
    //dentro de este bloque de código persona va a ser igual a 'antonio'
}

//y por fuera del bloque tambien se verá afectada
//Con let esto no sucede 

let persona = 'yojan';

//si hago un cambio mas adelante en un bloque de código sobre la variable persona 
//entonces se va a ver afectada globalmente

if(true){
    let persona = 'antonio';
    //dentro de este bloque de código persona va a ser igual a 'antonio'
}

//Y por fuera va a ser 'yojan'

//Tambien tenemos las contantes, que van a ser valores inmutables que declararemos 
//en algún momento de nuestro código, solo se les puede asignar una valor a la hora de declarala

const pi = 3.14159264;

//más adelante no se podrá cambiar
~~~

## Template strings
Cuando queremos mostrar mensajes personalizados necesimos concatenar información a unas plantillas que tengamos predeterminadas, anteriormente se hacia con el uso del operador '+', aun se puede hacer, pero eso cambió y lo vamos a ver acontinuación.

~~~js
let nombre = 'yojan';
let profesion = 'desarrollador';

//La forma como se concatena normalmente es asi
let mensaje = 'hola ' + nombre + ', tu profesión es: ' + profesion + '.';

//pero la nueva forma es utilizando estas comillas `` y formatenado el texto:
let mensajeNuevo = `hola ${nombre}, tu profesión es ${profesion}.`
~~~

## funciones
Las funciones son bloques de código reutilizables que podremos llamar cuantas veces queramos para ejecutar una determinada acción, se declaran de diferentes maneras y lo veremos acontinuación.

~~~js
//function declaration
function saludar(nombre){
    console.log(`hola ${nombre}, bienvenido.`);
}

//function expression
const saludar = function(nombre){
    console.log(`hola ${nombre}, bienvenido.`);
}
~~~  

Cuando hacemos uso de una function declaration podemos ejecutarla en cualquier parate del codigo, incluso antes de la declaración, porque javascript primero lee todas las funciones y luego las ejecuta, caso contrario de una function expression, que si la ejecutas antes de declararla va a saltar un error.

### Arrow functions
Existe otra forma de declarar funciones y son las arrow function, que nos dan una forma mas sencila y legible de hacer nuestro código, eso se ve mucho en el uso de frameworks como react o angular.

~~~js
//Creamos una variable y la igualamos a los parametros que recibimos
//luego ponemos la sintaxis => para indicar que es una función 
const saludar = nombre => {
    console.log(`hola ${nombre}, bienvenido.`);
}

//En caso de recibir más parametros hay que ponerlos en parentesis
const  saludar = (nombre, profesion) => {
    console.log(`hola ${nombre}, tu profesion es ${profesion}.`);
}

//todas las funsiones tambien pueden recibir valores por defecto en caso
//de que envien los parametros vacios a la hora de usar una funcion
const  saludar = (nombre = 'Yepeto', profesion = 'Carpintero') => {
    console.log(`hola ${nombre}, tu profesion es ${profesion}.`);
}

//En caso de tener una funcion sencilla que retorne algo lo podemos hacer de la siguiente manera
const suma = (a,b) => a+b;
~~~

## Objetos
Con JS podemos utilizar objetos y hay diferentes formas de declararlos, utilizarlos y acceder a sus datos, vamos a ver algunos ejemplos.

~~~js
//Object literal
const persona = {
    //Aquí adentro van todos los atributos y métodos del objeto
    nombre: 'yojan',
    profesion: 'desarrollador de software',
    edad: 23,
}

//para imprimir los datos de este objeto se puede hacer de la siguiente manera
console.log(`Bienvenido ${persona.nombre}, tu profesión es ${persona['profesion']} y tienes ${persona.edad} años.`);

//Object constructor
function Tearea(nombre,urgencia){
    this.nombre = nombre,
    this.urgencia = urgencia
}

let tarea = new Tarea('estudiar JS','urgente');
~~~

### Prototypes
Los objetos en JavaScript tienen una propiedad especial llamada protoype y con ella podemos hacer muchas cosas locas, por el momento lo que haremos será crear metodos que nos permitan interactuar con nuestros objetos, se hace de la siguiente manera.

~~~js
//Podemos crear los metodos que nos podamos imaginar para un objeto utilizando prototype
Tarea.prototype.mostrar = function(){
    return `la tarea es ${this.nombre} y su urgencia es  ${this.urgencia}`
}
~~~

### Object destructuring
Es lo que hacemos cuando necesitamos acceder a información específica de nuestros objetos en ciertos momentos.

~~~js
//Tenemos un objeto
const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['ReactJS','VueJS','AngularJS']
}

//Accedemos a sus datos de diferentes formas
let versionAnterior = aprendiendoJS.version.nueva;
let {nueva} = aprendiendoJS.version;
~~~

### Object literal enhacement
Consiste en guardar en un objeto todo de una vez y pasandole los parametros que requerimos:

~~~js
let nombre = 'metallica';
let genero = 'heavy metal';
let canciones = ['one','fuel','whiskey in de jar'];

//podemos crear el objeto asi
const banda = {
    nombre:nombre,
    genero:genero,
    canciones:canciones
};

//Y tambien así que es más sencillo

const banda = {nombre,genero.canciones};

~~~

### Funciones/métodos de un objeto
Los objetos además de tener sus atributos y características, tambien tienen comportamiento, a éstos se les llama funciones o métodos y se pueden declarar de la siguiente manera: 

~~~js
const banda = {
    nombre:nombre,
    genero:genero,
    canciones:canciones,
    mostrar: function(){
        return `nombre: ${nombre}, genero: ${genero}, canciones: ${canciones}`;
    }
};

console.log(banda.mostrar());
~~~

## Colecciones
JS tiene tipos de datos que se pueden considerar colecciones y estos son los arreglos y maps, tambien podemos hacer un par de cosas con los objetos y sus keys.

### Arreglos
Los arreglos sun muy útiles para guardar insformacion relacionada a un objeto y se declaran de la siguiente manera:

~~~js
const carrito = ['papas','arroz','lasagna'];

//Para mostrar la información de un arreglo podemos utilizar un método de los arreglos que
//es un foreach y nos permite ejecutar una acción por cada elemento de un arreglo

carrito.foreach(producto=>{
    console.log(producto);
});
~~~

### map
Los mapas nos ayudan a hacer operaciones con los arreglos como por ejemplo concatenarlos, copiarlos, recorrerlos, etc. Lo más destacable de ellos es que nos hacen una copia del arreglo que vayamos a utilizar, eso nos permite mantener el original siempre igual.

~~~js
carrito.map(producto=>{
    return `el producto es: ${producto}`;
});
~~~

### Object.key
Nos permite conocer los nombres de los atributos de un objeto

~~~js
console.log(Object.keys(banda));
~~~

### Spread operator
Me permite jugar con los arreglos, como por ejemplo hacer copias y concatenarlos.

~~~js
const arreglo1 = ['python','javascript','php']
const arreglo2 = ['django','react','laravel']

//Antes
let nuevoArreglo = arreglo1.concat(arreglo2);

//Ahora
let nuevoArreglo = [...arreglo1,...Arreglo2];

//Obtener el último elemento
let ultimo=[...areglo].reverse();

//Tambien lo podemos utilizar para pasar parametros a una función
let numeros = [1,2,3];
let suma = sumar(...numeros);
~~~

### Métodos de los arreglos 
Cuando queremos hacer una operación con arreglos debemos fijarnos si ya tienen un método que haga lo que requerimos, como por ejemplo los siguiente:

~~~js
//Tenemos un arreglo de personas que luce de la siguiente manera
let personas = [
    {nombre:'yojan',edad:23,carrera:'desarrollo web'},
    {nombre:'jhon',edad:22,carrera:'desarrollo backden'},
    {nombre:'felipe',edad:23,carrera:'desarrollo backend'},
    {nombre:'william',edad:24,carrera:'analisis de datos'},
    {nombre:'laura',edad:22,carrera:'diseño ui/ux'},
]

//Tenemos un metodo que nos permite filtrar un arreglo como lo deseemos
personas.filter(persona=>{
    return persona.edad >=23;
});

//Si queremos encontrar un único registro
personas.filter(persona=>{
    return persona.nombre === 'laura';
});

//Si queremos encontrar sumar algun dato
personas.reduce((edadTotal,persona)=>{
    return edadTotal + persona.edad;
}, 0);
~~~

## Promises
Nos ayudan a comprender mejor el código cuando hacemos, por ejemplo, un llamado asicrono a una API o rn cualquier otro caso

~~~js
const aplicarDescuento= new Promise((resolve,reject)=>{
    setTimeout(() =>{
        let descuento = true;
        if(descuento){
            resolve('descuento aplicado');
        } else{
            reject('descuento no aplicado');
        }
    },3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});
~~~

### Promises con Ajax
Una petición Ajax consta de 3 o 4 pasos que son los siguientes:  
1. crear el llamado
2. abrir la conexión
3. enviar los datos
4. error  

Lo veremos acontinuación en el siguiente ejemplo el cual hace un llamado a una API para descargar una lista de usuarios.

~~~js
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

//vamos a imprimir el resultado en nuestro html

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
~~~

## Programación orientada a objetos
En React debemos escribir todo nuestro código con clases y para ello es importante conocer lo que es la programació orientada a objetos 

~~~js
class Tarea(){
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    imprimir(){
        return `la tarea ${this.nombre} tiene una prioridad ${prioridad}`;
    }
}
~~~

### Herencia 
La herencia nos permite tomar los atributos y comportamientos de una clase padre y extenderla hacia sus clases hijas, esto nos ayuda a reducir mucho el código y tenerlo mucho más organizado.  
En React se utiliza mucho la herencia, asi como en todos los frameworks, vamos a ver un poco de herencia acontinuación  

~~~js
//vamos a heredar de nuestro ejemplo anterior y lo hacemos de la siguiente manera 
class comprasPendientes() extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }
    
    //puedo sobreescribir los métodos ya existentes
    mostrar(){
        super.mostrar();
        console.log(`cantidad: ${this.cantidad}`);
    }
    
    //Y crear nuevos métodos
    hola(){
        console.log('hola');
    }
}
~~~

### Módulos
JS nos permite tener nuestro código bien segmentado y ordenado haciendo uso de módulos, gracias a ellos podemos importar variables, funciones y clases de otros archivos de JS.  

Entonces tenemos nuestro index.html dentro del cual vamos a llamar a nuestro archivo JS pero con la particularidad de que le vamos a agregar un atributo que se llama `type` y como valor le damos `module`

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aprendiendo ReactJS</title>
</head>
<body>
    <h1>Repasando javascript</h1>
    <div id="app">

    </div>
    <script src="js/app.js" type="module"></script>
</body>
</html>
~~~

Nuestro archivo `js/app.js` va a ser nuestro archivo principal, el cual contiene todos los módulos y va a verse más o menos así

~~~js
import {nombreTarea, crearTarea} from './tareas.js';
//Aquí ya podremos hacer uso de la variable 'nombreTarea' y del método crearTarea dentro de este archivo.
~~~

Nuestro archivo `tarea.js` va a lucir así 

~~~js
export const nombreTarea = 'pasear al perro';
export const crearTarea = (nombre, prioridad) =>{
    return `tarea: ${nombre}, prioridad: ${prioridad}`;
}
~~~

Si queremos exportar clases lo hariamos de la misma manera, a demás si queremos incluir una clase hija, primero a esa clase hijua hay que importarle la clase padre y luego exportarla

~~~js
export default class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `tarea: ${this.tarea}, prioridad: ${this.prioridad}`
    }
}
~~~

Y por ejemplo en otro archivo tenemos otra clase que hereda de Tarea

~~~js
import Tarea from './tarea.js';

export default class listaCompras() extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
}
~~~

## Conclusiones
Con esto terminamos el repaso de javascript y nos podemos dar cuenta de que hay muchas cosas que podemos utilizar con javascript y quizas no recordabamos, acontinuación continuaremos con la introducción a react y como instalarlo.

# React
Una vez terminado nuestro repaso de JavaScript, vamos a iniciar con React, todo lo que tiene que ver con su instalación y funcionamiento

## Instalación
Para instalar react primero debemos tenert instalado npm, que es el manejador de paquetes de node, yo utilizo ubuntu, entonces para hacer la instalación de react abrimos una terminal y primero que todo vamos a instalar npm y luego create-react-app

~~~sh
#Instalamos npm en su ultima versión
sudo apt install npm

#Luego instalamos create-react-app de forma global
sudo npm install -g create-react-app

#y para crear una nueva aplicación de react lo hacemos con el siguiente comando
create-react-app <my_app>
cd <my_app>
npm start
~~~  

de esta manera ya hemos instalado react, hemos creado nuestra app y la hemos iniciado.

## React components
React cuenta con los "componentes" que son bloques de código que nos ayudan a optimizar nuestro trabajo permitiendonos reutilizar los componentes donde los requiramos, existen dos tipos de componoentes que son:

### Class component
deben tener un método render que retorna lo que requerimos
~~~js
class App extends Component{
    render(){
        return(
            <p>Hola mundo</p>
        )
    }
}
~~~
### Functional component
Es más pequeño que los class component, es muy facil de crear y leer, facil de hacer testing, no se puede usar la palabra this, se dice que tiene mejor perfomance y sus desventajas: no se pueden usar los componentes del ciclo de vida, no tienen states, no pueden usar refs, en caso de usar alguno de estos 3, es necesario usar un class component.
~~~js
const app = props =>(
    <p>Hola mundo</p>
);
~~~
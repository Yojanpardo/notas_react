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
//Tenemos un arreglo de personas que loce de la siguiente manera

~~~
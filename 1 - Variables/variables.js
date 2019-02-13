/*Al programar necesitamos almacenar valores en la memoria de la computadora para poder interactuar con ellos
Para poder identificar estos valores le asignamos un nombre descriptivo
Es posible que a lo largo de un programa pisemos un valor guardado en una posición de memoria, es decir que este valor puede ser variable
Podemos decir que una variable es algo que nos permite almacenar un valor en memoria de la computadora y que por medio de un nombre descriptivo podemos acceder e interactuar con él.
En JavaScript existe la palabra reservada var que nos permite declarar una variable*/

//Ejercicio 1 hasta 6
/*var nombre, apellido, edad, fechaDeNacimiento, direccion;

nombre = 'Michelle';
apellido = 'Mullett';
edad = '25';
fechaDeNacimiento = '30/07/1993';
direccion = 'Mariano Acosta 75';

console.log('nombre: ', nombre);
console.log('apellido: ', apellido);
console.log('edad: ', edad);
console.log('fechaDeNacimiento: ', fechaDeNacimiento);
console.log('direccion: ', direccion);*/

//Tipos base

/*string: Los string también son conocidos como cadena de caracteres y no son más que un texto
number: El tipo de dato number son números y nos permiten hacer operaciones matemáticas
boolean: Este tipo boolean acepta valores del tipo true o false, es decir que podemos utilizarlo cuando necesitamos un valor verdadero (true) o falso (false)
undefined: Define que un valor es indefinido
null: Define que un valor es nulo, parece que es similar a undefined pero ya vamos a ver algunas diferencias*/

//String representan un valor de texto, lo podemos utilizar para guardar valores como nombre, apellido, dirección, etc; se escriben entre comillas dobles "" o simples ''

//Ejercicio 10

/*var saludo = '¡Aguante ECMAScript!';

console.log(saludo);*/

//Ejercicio 11

/*console.log('Me gusta mucho ECMAScript');*/

//Ejercicio 12

/*nombre = 'Michelle';
saludo = 'Bienvenida';

console.log(saludo + " " + nombre);*/

//Ejercicio 13

/*nombre = 'Michelle';
saludo = 'Bienvenida';

console.log(saludo + " " + nombre + ' al curso de Frontend');*/

//Ejercicio 14

/*nombre = 'Michelle';
saludo = 'Bienvenida';
finDeSaludo = 'al curso de Frontend';

console.log(saludo + " " + nombre + " " + finDeSaludo);*/

//Ejercicio 18

/*var local = "Jay's";
var mensaje = 'es el "mejor" local';

console.log(local + " " + mensaje);*/

//Ejercicio 19

/*var primerTexto = 'este texto tiene "comillas dobles"';
var segundoTexto = "este texto tiene 'comillas simples'";

console.log(primerTexto);
console.log(segundoTexto);*/

//Numeros

//Ejercicio 20

/*var dia = 1;
var mes = 2;
var anio = 2019;

console.log(dia + '/' + mes + '/' + anio);*/

//Ejercicio 21
/*var edad = 25;
var telefono = 1166185865;
var calle = 'Mariano Acosta';
var altura = 75;

console.log('Tengo ' + edad + ' años');
console.log('Mi teléfono es ' + telefono);
console.log('Vivo en la calle ' + calle + ' altura ' + altura);*/

//Boolean: aceptan un valor del tipo true (verdadero) o false (falso)

//Ejercicio 22

/*var salir = true;
var usuarioRegistrado = false;
var meGustaJs = true;

console.log('salir: ', salir);
console.log('usuarioRegistrado: ', usuarioRegistrado);
console.log('meGustaJs: ', meGustaJs);*/

//Undefined: Al declarar una variable en ECMAScript y no asignarle ningún valor por defecto se le asigna el valor undefined/Este valor significa que algo no esta definido

/*var indefinido = undefined;
console.log(indefinido);*/

//Ejercicio 23

/*var nombre = 'Michelle';

console.log('nombre: ', nombre);*/

//Null: para establecer que algo es nulo. Es común tener que validar si un valor es null / Si bien null y undefined parecen similares se utilizan de distinta manera

/*var nulo = null;
console.log(nulo);*/

//Ejercicio 24

/*var nombre = null;

console.log('nombre: ', nombre);*/

//Type of: por medio del operador typeof podemos saber de que tipo es una variable

/*En este ejemplo vemos que cada tipo de dato retorna un tipo distinto
En el caso de null retorna object en lugar de null como uno espera
Object es otro tipo de dato de ECMAScript y lo vamos a ver más adelante*/

/*var nombre = 'Radia';
var edad = 30;
var casado = false;
var indefinido = undefined;
var nulo = null;

console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof casado); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object*/

//Ejercicio 25

/*var nombreDeSuperHeroe = 'Batman';
var nombre = 'Bruce Wayne';
var vuela = false;
var maneja = true;
var vida = 45;
var trabajo = undefined;
var tiempoLibre = null;

console.log('nombreDeSuperHeroe: ', nombreDeSuperHeroe);
console.log('nombre: ', nombre);
console.log('vuela: ', vuela);
console.log('maneja: ', maneja);
console.log('trabajo: ', trabajo);
console.log('tiempoLibre: ', tiempoLibre);

console.log('nombreDeSuperHeroe: ', typeof nombreDeSuperHeroe);
console.log('nombre: ', typeof nombre);
console.log('vuela: ', typeof vuela);
console.log('maneja: ', typeof maneja);
console.log('trabajo: ', typeof trabajo);
console.log('tiempoLibre: ',typeof tiempoLibre);*/







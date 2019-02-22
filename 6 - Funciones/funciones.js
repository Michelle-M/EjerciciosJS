//Ejercicio 001
//Declarar una función que muestre en consola los números pares del 0 al 100

/*function numeros () {
    var num = 0
    while ( num <= 100 ) {
        console.log(num);
        num ++;
    }
}

numeros();*/

//Ejercicio 002
/*Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal*/

/*function presentacion () {
    console.log('Michelle');
    console.log('25 años');
    console.log(1166185865);
    console.log('Mariano Acosta');
    console.log(75);
    console.log(1407);
}

presentacion();*/

//Ejercicio 003
/*Declarar una variable mostrarNombre y asignar una función
La función mostrarNombre tiene que mostrar tu nombre en consola con el siguiente formato:
  =======
  = Ada =
  =======
Ejecutar esta función 2 veces*/

/*var mostrarNombre = function () {
    console.log('============');
    console.log('= Michelle =');
    console.log('============');
}

mostrarNombre();
mostrarNombre();*/

//Ejercicio 004
/*Declarar una variable numerosPares y asignar una función
La función numerosPares muestra en consola los números pares del 0 al 100
Ejecutar esta función 5 veces*/

/*var numerosPares = function () {
    var num = 0;
    while ( num <= 100 ) {
        console.log(num);
        num += 2;
    }
}

numerosPares();
numerosPares();
numerosPares();
numerosPares();
numerosPares();*/

//Ejercicio 005
/*Declarar la variable fibonacci y asignar una función como valor
La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
Ejecutar esta función 3 veces*/

/*var fibonacci = function () {
    var a = 0;
    var b = 1;
    var c = 1;
    var contador = 1;
    while ( contador <= 10 ) {
        console.log(a);
        a = b; 
        b = c; 
        c = a + b; 
        contador++;
    }
}

fibonacci();
fibonacci();
fibonacci();*/

//Ejercicio 006
/*Crear una función que se llame obtenerNombre y retorne tu nombre como string
Mostrar en consola el siguiente mensaje: Mi nombre es obtenerNombre()*/

/*function obtenerNombre () {
    return 'Michelle';
}

console.log('Mi nombre es ' + obtenerNombre());*/

//Ejercicio 007
/*Crear una función numerosPares
Dentro de la función, crear un array con los primeros 5 números pares
Retornar ese array*/

/*function numerosPares () {
    return [2, 4, 6, 8, 10];
}

numerosPares();*/

//Ejercicio 008
/*Crear una función que se llame obtenerNombre y retorne tu nombre como string
Crear una función llamada obtenerSaludo, que retorne un valor string
Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable nombre
Retornar un texto de la forma: ¡Hola, nombre!, donde nombre tiene que ser el valor guardado en la variable de arriba.
Ejecutar la función obtenerSaludo y mostrar el resultado por consola.*/

/*function obtenerNombre () {
    return 'Michelle';
}
function obtenerSaludo () {
    var nombre = obtenerNombre();
    return 'Hola, ' + nombre;
}

var textoDelSaludo = obtenerSaludo();
console.log(textoDelSaludo);*/

//Ejercicio 009
/*Declarar la función obtenerIDUsuario que retorna un valor number con el número 50
Declarar la función usuarioValido que retorna un valor boolean
Dentro de esta función obtener el ID del usuario utilizando la función obtenerIDUsuario
Si el ID del usuario es mayor que 30 retornar falso sino verdadero
Ejecutar la función usuarioValido y guardar el valor que retorna en una variable llamada elUsuarioEsValido
SI el elUsuarioEsValido Entonces
Mostrar el mensaje: El usuario es válido
SINO
Mostrar el mensaje: El usuario no es válido*/

/*function obtenerIDUsuario () {
    return 50;
}

function usuarioValido () {
    if (obtenerIDUsuario() > 30) {
        return false;
    } else {
        return true;
    }
}

usuarioValido();
var elUsuarioEsValido = usuarioValido();

if (elUsuarioEsValido === true) {
    console.log('El usuario es valido');
} else {
    console.log('El usuario no es valido');
}*/

//Ejercicio 010
/*Crear una función llamada mostrarNombreCompleto
Esta función recibe 2 parámetros nombre y apellido
Mostrar con console.log() el nombre completo de la persona, concatenando nombre y apellido
Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'
Crear una función llamada obtenerNombreCompleto
Esta función recibe 2 parámetros nombre y apellido
Retornar el nombre completo de la persona, concatenando nombre y apellido
Por ejemplo: si los parámetros son 'Grace' y 'Hopper', debe retornar el string resultante 'Grace Hopper'*/

/*function mostrarNombreCompleto (nombre, apellido) {
    console.log(nombre, apellido);
}

mostrarNombreCompleto('Ada', 'Lovelace');

function obtenerNombreCompleto (nombre, apellido) {
    return nombre + apellido;
}

obtenerNombreCompleto('Grace', ' Hopper');*/

//Ejercicio 011
/*Copiar el código que se encuentra a continuación, y completar las funciones
Todo el código de cada función debería ir dentro de las llaves de esa función*/

/*function returnString(str) {
    return str;
}

console.log(returnString('Chocolate') === 'Chocolate');*/
  
/*function sum(a, b) {
    return a + b;
}
console.log(sum(2,2));
console.log(sum(2,2) === 4);*/
  
/*function res(a, b) {
    return a - b;
}
console.log(res(5,9));
console.log(res(5,9) === -4);*/
  
/*function mul(a, b) {
    return 3 * 4;
}
console.log(mul(3,4));
console.log(mul(3,4) === 12);*/
  
/*function div(a, b) {
    return 15 / 3;
}
console.log(div(15,3));
console.log(div(15,3) === 5);*/

//Ejercicio 012
/*Copiar el código que se encuentra a continuación, y completar las funciones
Todo el código de cada función debería ir dentro de las llaves de esa función*/

/*function sonIguales(a, b) {
    a = 'Michelle';
    b = 'Michelle';
    //b = 'Morena';
  if (a === b) {
      console.log('Son iguales');
  } else {
      console.log('Son distintos');
  }
}

sonIguales();*/

function tienenLaMismaLongitud(str1, str2) {
  // retorna true si los dos strings str1 y str2 tienen el mismo largo
  // sino retorna false
}

/*function esMenorQueNoventa(num) {
  if ( num < 90 ) {
      console.log('El numero es menor que 90')
  } else {
      console.log('El numero es mayor a 90');
  }
}

esMenorQueNoventa(80);*/

/*function esMayorQueCincuenta(num) {
    if ( num > 50 ) {
        console.log('El numero es mayor que 50');
    } else {
        console.log('El numero es menor que 50');
    }
}

esMayorQueCincuenta(25);*/

/*function obtenerResto(a, b) {
    console.log(a%b);
}

obtenerResto(50,35);*/

/*function esPar(num) {
    if ( num % 2 === 0 ) {
        console.log('El numero es par');
    } else {
        console.log('No es par');
    }
}

esPar(10);*/

/*function esImpar(num) {
    if ( num % 2 !== 0 ) {
        console.log('El numero es impar');
    } else {
        console.log('No es impar');
    }
}

esImpar(11);*/

//Ejercicio 013
/*Copiar el código que se encuentra a continuación, y completar las funciones
Todo el código de cada función debería ir dentro de las llaves de esa función*/

/*function exclamar(str) {
    console.log('¡' + str + '!'); //Con el + los junta sin espaciar
}

exclamar('Hola mundo');*/

/*function unirNombre(nombre, apellido) {
  console.log(nombre, apellido); //Con las comas deja el espacio
}

unirNombre('Ada', 'Lovelace');*/

/*function saludar(nombre) {
  console.log('Hola', nombre);
}

saludar('Ada');*/

//Ejercicio 014
/*Crear una función llamada obtenerPrimerElemento
La función recibe un único parámetro, del tipo array
Retornar el elemento que se encuentra en la primer posición*/

/*var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

var numerosPares = [0, 2, 4, 6, 8, 10, 12];

function obtenerPrimerElemento(peli) {
    console.log(peli);
}

obtenerPrimerElemento(peliculasBatman[0]);*/

//Ejercicio 015
/*Crear una función llamada obtenerUltimoElemento
La función recibe un único parámetro, del tipo array
Retornar el elemento que se encuentra en la última posición*/

/*var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

var numerosPares = [0, 2, 4, 6, 8, 10, 12];

function obtenerUltimoElemento (peli) {
    console.log(peli)
}

obtenerUltimoElemento(peliculasBatman.pop());*/

//Ejercicio 016
/*Crear una función llamada calcularSumatoria
La función recibe un único parámetro, del tipo array, con números enteros
Retornar la suma de todos los números que pertenecen al array*/

/*var numeros = [7, 4, 1, 8, 9, 4, 9];
var suma = 0;

function calcularSumatoria(numeritos) {
    return numeros.reduce(function(total, item) {
        return total + item;
    });
  }

suma = calcularSumatoria();
console.log(suma);*/

//Ejercicio 017
/*Crear otra función llamada calcularPromedio
La función recibe un único parámetro, del tipo array, con números enteros
Retornar el promedio entre todos los números que pertenecen al array*/
// codear a aca abajo la solución al ejercicio
// CREAR calcularPromedio
// para la funcion calcularPromedio podés utilizar calcularSumatoria que hicimos en el ejercicio fn_016

/*var numeros = [7, 4, 1, 8, 9, 4, 9];
var resultadoFinal;

function calcularPromedio(promedio) {
    return numeros.reduce(function(total, item) {
        return total + item
    });
}

resultadoFinal = calcularPromedio()/numeros.length;
console.log(resultadoFinal);*/

//Ejercicio 018
/*Tenemos un array en una variable masNumeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
Recorré el array masNumeros y:
Si el número es par, agregalo al array numerosPares
Si el número es impar, agregalo al array numerosImpares
Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]
Para saber si un número es par o impar, tenemos que utilizar las funciones que creamos en el ejercicio fn_012*/

var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

function pares(numeros) {
    if ( masNumeros % 2 === 0 ) {
        return numeros;
    }
}

numerosPares = pares();
console.log(numerosPares);

//Ejercicio 019
/*Crear una función con el nombre compararNumeros que acepte dos parámetros numéricos llamados numero1 y numero2

La función tiene que retornar:

SI numero1 es menor que numero2, retornar -1
SI numero2 es menor que numero1, retornar 1
SI numero1 es igual que numero2, retornar 0
Probar la función en el siguiente código*/

console.log( compararNumeros(1, 5) < 0 ); // true
console.log( compararNumeros(5, 1) > 0 ); // true
console.log( compararNumeros(1, 1) === 0 ); // true

//Ejercicio 020
/*Crear una función con el nombre mostrarElNumeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2

La función tiene que retornar el mensaje:

SI numero1 es mayor que numero2, retornar El número ${numero1} es más grande que ${numero2}
SI numero2 es menor que numero1, retornar El número ${numero2} es más grande que ${numero1}
SI numero1 es igual que numero2, retornar Los dos números son iguales
Para comparar los dos números, hay que usar la función compararNumeros desarrollada en el ejercicio fn_019

Probar la función en el siguiente código*/

console.log( mostrarElNumeroMasGrande(1, 5) ); // El número 5 es más grande que 1
console.log( mostrarElNumeroMasGrande(63, 27) ); // El número 63 es más grande que 27
console.log( mostrarElNumeroMasGrande(1, 1) ); // Los dos números son iguales
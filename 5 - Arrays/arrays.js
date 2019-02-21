//Ejercicio 000
/*Declarar una variable llamada womenInTech y asignarle un array que contenga 5 nombres de mujeres influyentes en la tecnología.
Declarar una variable llamada arrayDeNumeros y asignarle un array que contenga 5 números (cualquier número).
Mostrar en consola el contenido de ambas variables.*/

/*var womenInTech = ['Ada Lovelace', 'Hedy Lamarr', 'Edith Clarke', 'Jude Milhon', 'Grace Murray Hopper'];
var arrayDeNumeros = [1, 2, 3, 4, 5];

console.log(womenInTech);
console.log(arrayDeNumeros);*/

//Ejercicio 001
/*Dado el array playlistFoo, mostrar en consola la canción que está en segundo y quinto lugar.
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];*/

/*var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log('Segunda cancion:', playlistFoo[1]);
console.log('Quinto cancion:', playlistFoo[4]);*/

//Ejercicio 002
/*Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 10).
Guardar en variables el valor del primer, tercer y sexto elemento del array.
Mostrar por consola los siguientes 3 mensajes:
La banda en primer lugar es: [NOMBRE_DE_LA_PRIMER_BANDA]
La banda en tercer lugar es: [NOMBRE_DE_LA_TERCER_BANDA]
La banda en sexto lugar es: [NOMBRE_DE_LA_SEXTA_BANDA]*/

/*var bandas = ['Ariana Grande', 'Mac Miller', 'Kendrick Lamar', 'Khalid', 'Bad Bunny', 'Lana del rey', 'Rosalia', 'Cardi B', 'Drake', 'Eminem'];

var primerLugar = bandas[0];
var tercerLugar = bandas[2];
var sextoLugar = bandas[5];

console.log('La banda en primer lugar es: ', primerLugar);
console.log('La banda en tercer lugar es: ', tercerLugar);
console.log('La banda en sexto lugar es: ', sextoLugar);*/

//Ejercicio 003
/*Crear un array con el nombre notas y asignar 10 valores numéricos de 1 a 10
Sumar los valores de la primera, cuarta, quinta y última entrega
Cada nota del array notas corresponde a una entrega de las alumnas*/

/*var notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(notas[0] + notas[3] + notas[4] + notas[9]]);*/

//Ejercicio 004
/*Crear el siguiente array con el nombre datos: [27, true, 'La edad de la persona es: ']
Si el segundo item en el array datos es verdadero entonces
Mostrar en consola: La edad de la persona es: 27
Utilizar el primer y último item del array datos para formar el string del mensaje pedido*/

/*var datos = [27, true, 'La edad de la persona es: '];

if ( datos[1] === true ) {
    console.log(datos[2], datos[0]);
}*/

//Ejercicio 005
/*Declarar un array vacio con el nombre alumnas
Asignar el nombre de una alumna en los ínidices: 0, 1, 2, 3, 4 y 5
Mostrar en consola cada uno de los elementos utilizando los índices dados*/

/*var alumnas = [];
alumnas[0] = 'Sofia';
alumnas[1] = 'Lucia';
alumnas[2] = 'Mara';
alumnas[3] = 'Catarina';
alumnas[4] = 'Luna';
alumnas[5] = 'Morena';

console.log(alumnas);*/

//Ejercicio 006
/*Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
Smells Like Teen Spirit
In Bloom
Come As You Are
Immodium
Lithium
Polly
Territorial Pissings
Drain You
Lounge Act
Pay To Play
On a Plain
Endless, Nameless
Reemplazar Immodium por Breed
Reemplazar Pay To Play por Stay Away
Reemplazar Tim por Something in the Way
Mostrar en consola la lista de canciones modificada
El resultado debería ser: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]*/

/*var discoNevermind = ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are', 'Immodium', 'Lithium', 'Polly', 'Territorial Pissings', 'Drain You', 'Lounge Act', 'Pay To Play', 'On a Plain', 'Endless, Nameless'];

discoNevermind[3] = 'Breed';
discoNevermind[9] = 'Stay Away';
discoNevermind[11] = 'Something in the Way';

console.log(discoNevermind);*/

//Ejercicio 007
/*Crear un array con el nombre peliculas y asignar los siguientes elementos
Superman
Batman Begins
The Dark Knight
Man of Steel
The Dark Knight Rises
The Batman
Declarar un nuevo array peliculasBatman y asginar sólo las peliculas que deberían estar en la lista de peliculasBatman
Mostrar en consola las dos listas con todas las peliculas y las que tiene solo las de Batman*/

/*var peliculas = ['Superman', 'Batman Begins', 'The Dark Knight', 'Man of steel', 'The Dark Knight Rises', 'The Batman'];
var peliculasBatman = [peliculas[1], peliculas[2], peliculas[4], peliculas[5]];

console.log(peliculas);
console.log(peliculasBatman);*/

//Ejercicio 008
/*Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
Mostrar en consola la cantidad de etiquetas guardadas en el array*/

/*var etiquetasHtml = ['title', 'head', 'body', 'div', 'SPAN'];

console.log(etiquetasHtml[1].toUpperCase());
console.log(etiquetasHtml[4].toLowerCase());
console.log('Cantidad de etiquetas: ', etiquetasHtml.length);*/

//Ejercicio 009
/*Teniendo el array ganadorasRupaul, mostrar en consola el nombre de la primer y última ganadora.
Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica como si no supieramos la cantidad exacta de elementos
var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];*/

/*var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];
var cantidadGanadoras = ganadorasRupaul.length;
var ultimoIndice = cantidadGanadoras - 1;

console.log('Primera ganadora:', ganadorasRupaul[0]);
console.log('Ultima ganadora:', ganadorasRupaul[ultimoIndice]);*/

//Ejercicio 010
/*Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array playlistNirvana tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array playlistFoo tiene más elementos.*/

/*var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

var largoNirvana = playlistNirvana.length;
var largoFoo = playlistFoo.length;

if ( largoNirvana > largoFoo ) {
    console.log('La playlist de Nirvana es más larga que la de Foo Fighters');
} else {
    console.log('La playlist de Foo Fighters es más larga');
}*/

//Ejercicio 011
/*Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando shift y unshift.*/

/*var frutas = ['Manzana', 'Banana'];
var eliminoManzana = frutas.shift();
var sumoFrutilla = frutas.unshift('Frutilla');

console.log(frutas);*/

//Ejercicio 012
/*Declarar una variable llamada concreteAndGold y asignarle un array vacio []
Agregar al array las siguientes canciones:
T-Shirt
Run
Make It Right
The Sky Is a Neighborhood
La Dee Da
Dirty Water
Arrows
Happy Ever After (Zero Hour)
Sunday Rain
The Line
Concrete and Gold
No se puede utilizar índices numéricos
Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
Los elementos tienen que guardarse en el mismo orden que se van ingresando
Mostrar en consola la primera y última canción
Mostrar en consola el contenido del array*/

/*var concreteAndGold = [];
var agregoCanciones = concreteAndGold.push('T-Shirt', 'Run', 'Make It Right', 'The Sky Is a Neighborhood', 'La Dee Da', 'Dirty Water', 'Arrows', 'Happy Ever After (Zero Hour)', 'Sunday Rain', 'The Line', 'Concrete and Gold');

console.log(concreteAndGold.shift());
console.log(concreteAndGold.pop());
console.log(concreteAndGold);*/

//Ejercicio 013
/*Declarar una variable llamada concreteAndGold y asignarle un array vacio []
Agregar al array las siguientes canciones:
T-Shirt
Run
Make It Right
The Sky Is a Neighborhood
La Dee Da
Dirty Water
Arrows
Happy Ever After (Zero Hour)
Sunday Rain
The Line
Concrete and Gold
No se puede utilizar índices numéricos
Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
Los elementos tienen que guardarse en el orden inverso al que se van ingresando
Mostrar en consola la primera y última canción
Mostrar en consola el contenido del array*/

//Ejercicio 014
/*Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
Eliminar el primer elemento, y agregarlo al final del array.
Mostrar el resultado final.
Resultado esperado*/

/*var numeros = [6, 1, 2, 3, 4, 5];

//Solucion 1

numeros.shift();
numeros.push(6);
console.log(numeros);

//Solucion 2

numeros.sort();
console.log(numeros);*/

//Ejercicio 015
/*Partiendo del siguiente array de números var numeros = [6, 2, 3, 4, 5, 1];
Eliminar el primer elemento, y guardarlo en una variable primerElemento.
Eliminar el último elemento, y guardarlo en una variable ultimoElemento.
Agregar el valor de primerElemento al final del array.
Agregar el valor de ultimoElemento al principio del array.
Mostrar el resultado final*/

/*var numeros = [6, 2, 3, 4, 5, 1];
var primerElemento = numeros.shift();
var ultimoElemento = numeros.pop();
numeros.push(primerElemento);
numeros.unshift(ultimoElemento);

console.log(numeros);*/

//Ejercicio 016
/*Teniendo las siguientes variables playlist y playlistEscuchada:
  var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
  var playlistEscuchada = ['School'];
Eliminar la primer canción del array playlist, y agregar el elemento eliminado al final del array playlistEscuchada
Mostrar el contenido de playlist
Mostrar el contenido de playlistEscuchada*/

/*var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistEscuchada = ['School'];

var eliminado = playlist.shift();
playlistEscuchada.push(eliminado);

console.log(playlist);
console.log(playlistEscuchada);*/

//Ejercicio 017
/*Si tenemos el array playlist
Recorrer la lista de canciones con un ciclo y mostrarlas en consola una a una utilizando console.log()
De inicio a fin
De fin a inicio*/

/*var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

for ( var i = 0; i < playlist.length; i++ ) {
    console.log(playlist[i]);
}

for ( var i = playlist.length; i >= 0; i-- ) {
    console.log(playlist[i]);
}*/

//Ejercicio 018
/*Si tenemos el array womenInTech
Ordenar el array
Mostrar en la consola el array ordenado
Revertir el orden de la lista ordenada
Mostrar en la consola el array revertido
Unir los nombres de todas las mujeres en tecnología utilizando " - " para separarlos*/

/*var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];
womenInTech = womenInTech.sort(); //Array ordenado
console.log(womenInTech); //Consola del array ordenado
womenInTech = womenInTech.reverse(); //Orden invertido
console.log(womenInTech); // Consola del invertido
var concatenadas = womenInTech.join(' - ');
console.log(concatenadas);*/

//Ejercicio 019
/*Si tenemos dos arrays playlistNirvana y playlistFoo:
Crear una variable playlistCompleta, con los nombres de todas las canciones que hay en playlistNirvana y playlistFoo.
Mostrar en consola los siguiente nombres de forma individual (uno por linea):
Nombres de las canciones de nirvana (a mano utilizando índices)
Nombres de los canciones de foo fighters (utilizando while)
Nombres de todas las canciones entre ambas listas (utilizando for)*/

/*var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

var playlistCompleta = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium', 'Everlong', 'The Pretender', 'Learn to Fly'];

//Canciones de Nirvana con indices

console.log(playlistCompleta[0]);
console.log(playlistCompleta[1]);
console.log(playlistCompleta[2]);
console.log(playlistCompleta[3]);

//Canciones Foo Fighters con while
//Como plantear la condicion

//Todas las canciones con for

for ( var i = 0; i < playlistCompleta.length; i++ ) {
    console.log(playlistCompleta[i]);
}*/

//Ejercicio 020
/*Tenemos un array de canciones de Spotify. Queremos mostrar por consola la siguiente información:
Posición de la canción Lithium
Posición de la canción On a Plain
Completar el siguiente código para que pueda mostrarnos lo que solicitamos*/

/*var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

var indiceLithium = playlist.indexOf('Lithium');
var indiceOnAPlain = playlist.indexOf('On A Plain');

console.log('La posicion de Lithium es: ' + indiceLithium);
console.log('La posicion de On A Plain es: ' + indiceOnAPlain);*/

//Ejercicio 021
/*Tenemos un array con todas las ganadoras de RuPaul’s Drag Race, en la variable ganadorasRupaul. Vamos a escribir un programa en el que queremos saber la siguiente información:
Que número de ganadora es Sharon Needles
Mostrar por pantalla si Latrice Royale fue una ganadora del concurso.
Completar el siguiente código para que pueda mostrarnos lo que solicitamos*/

/*var ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

var posicionSharonNeedles = ganadorasRupaul.indexOf('Sharon Needles');
var latriceRoyaleGano = ganadorasRupaul.indexOf('Latrice Royale');

console.log('Sharon Needles es la ganadora número: ' + posicionSharonNeedles);
console.log(posicionSharonNeedles); 

if (latriceRoyaleGano >= 0) {
  console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
} else {
  console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
}*/

//Ejercicio 022
/*Tenemos un array llamado womenInTech sobre el que tenés que realizar las siguientes operaciones:
Eliminar a "Bill Gates", que está en la última posición
Agregar "Parisa Tabriz" al final del array
Luego de realizar las dos operaciones, vamos a mostrar la siguiente información por consola:
- La longitud del array
- Quien está en la posición 3
- Mostrar todos los elementos del array, uno debajo del otro*/

/*var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

//Primera parte

var elimino = womenInTech.pop();
var nuevaLista = womenInTech.push('Parisa Tabriz');
console.log(womenInTech); //Prueba de que se hizo bien

//Segunda parte

var longitud = womenInTech.length;
var enLaPosicion3 = womenInTech[2];
console.log("La longitud del array es: " + longitud);
console.log("En la posición 3 está: " + enLaPosicion3);

//Toda la lista indice por indice

for ( var i = 0; i < womenInTech.length; i++ ) {
    console.log(womenInTech[i]);
}*/

//Ejercicio 023
/*Tenemos un array llamado womenInTech con nombres de mujeres influyentes en la tecnología.
Queremos transformar el array en un string sin usar join, separando los nombres con un guión y guardando el string resultante en la variable nombresSeparadosPorGuion*/

/*var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];

var nombresSeparadosPorGuion = womenInTech.toString();
//Como sumar el -

console.log(nombresSeparadosPorGuion);*/

//Ejercicio 024
/*Tenemos un array llamado numbers con números enteros al azar.
Queremos calcular la suma de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6*/

/*var numbers = [6, 1, 34, 94, 3, 17];
//var sum = 0;
//Pensar otra forma de resolverlo
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];

console.log(sum) // 155 */

//Ejercicio 025
/*Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
Queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5*/

/*var notasDeTPs = [4, 7, 8, 5, 10];
//var notaFinal = 0;
//Pensar otra forma de resolverlo
var notaFinal = (notasDeTPs[0] + notasDeTPs[1] + notasDeTPs[2] + notasDeTPs[3] + notasDeTPs[4]) / 5;

console.log(notaFinal) // 6.8 */

//Ejercicio 026
/*Tenemos un array en una variable masNumeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
Recorré el array masNumeros y:
Si el número es par, agregalo al array numerosPares
Si el número es impar, agregalo al array numerosImpares
Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]*/

/*var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [ masNumeros[2], masNumeros[3], masNumeros[4], masNumeros[6], masNumeros[11], masNumeros[12], masNumeros[13], masNumeros[14], masNumeros[15], masNumeros[17], masNumeros[18], masNumeros[19] ];
var numerosImpares = [ masNumeros[0], masNumeros[1], masNumeros[5], masNumeros[7], masNumeros[8], masNumeros[9], masNumeros[10], masNumeros[16]];

console.log("Pares: ", numerosPares);
console.log("Impares: ", numerosImpares);*/

//Ejercicio 027
/*Tenemos un array en una variable playlist con una lista de canciones de un disco.
Recorrer la lista con la función forEach y mostrarlas una por una utilizando console.log()*/

/*var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach(function(canciones) {
  console.log(canciones);
});*/

//Ejercicio 028
/*Tenemos un array en una variable librosDeJS con una lista de libros de javascript.
Queremos saber la cantidad de libros que tenemos en el array
Nos pidieron que evitemos usar la propiedad length para contar los elementos de un array y que tenemos que usar si o si un forEach
Completá el siguiente código para que funcione el último console.log() y muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros*/

/*var librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

var totalLibros = librosDeJS.forEach(function(cancion, indice) {
  console.log(indice + 1);
})

console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');*/

//Ejercicio 029
/*Tenemos un array en una variable playlist con una lista de canciones de un disco.
Recorrer la lista con la función forEach y mostrar la posición y el nombre de la canción utilizando un console.log()*/

/*var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach(function(cancion, indice) {
  console.log(indice + ' - ' + cancion);
});*/

//Ejercicio 030
/*Tenemos un array llamado numbers con números enteros al azar.
Queremos calcular la suma de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
Es necesario utilizar forEach para conseguir la suma*/

/*var numbers = [6, 1, 34, 94, 3, 17];
var sum = 0;

sum = numbers.forEach(function(suma) {
  
});*/

//Ejercicio 031
/*Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
Queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
Es obligatorio utilizar forEach para conseguir el promedio*/

/*var notasDeTPs = [4, 7, 8, 5, 10];
var notaFinal = 0;*/

//Ejercicio 032
/*Tenemos un array en una variable masNumeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
Recorré el array masNumeros (utilizando forEach) y:
Si el número es par, agregalo al array numerosPares
Si el número es impar, agregalo al array numerosImpares
Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]*/

/*var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

numerosPares = masNumeros.forEach(function(pares) {
  if ( pares % 2 === 0 ) {
    numerosPares.push(pares);
    console.log(pares);
  }
});

numerosImpares = masNumeros.forEach(function(impares) {
  if ( impares % 2 !== 0 ) {
    numerosImpares.push(impares);
    console.log(impares);
  }
});*/

//Terminar de resolver como mostrarlos como array 

//Ejercicio 033
/*Tenemos un array en una variable valores con números al azar.
También tenemos un array vacio en la variable dobles.
Recorré el array valores (utilizando forEach) y guardá, en el mismo orden, cada número pero multiplicándolo por 2.
Por ejemplo: Si tenemos [1, 4, 7], dobles quedaría [2, 8, 14]*/

/*var valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
var dobles = [];

dobles = valores.forEach(function(multiplicar) {
  dobles.push(multiplicar * 2);
  console.log(dobles)
});*/

//Idem ejercicio 032



















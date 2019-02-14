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

var eliminado = playlist.pop();
playlistEscuchada.push(eliminado);

console.log(playlist);
console.log(playlistEscuchada);*/










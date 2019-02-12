//Ejercicio 38
/*Declarar una variable nombre con tu nombre como valor
Mostrar en consola la cantidad de letras que tiene tu nombre*/

/*var nombre = 'Michelle';
var largo = nombre.length; //me da la cantidad de caracteres (8) siempre es un numero

console.log('Mi nombre es ' + nombre + ' y tiene ' + nombre.length + ' letras');*/

//Ejercicio 39
/*Declarar una variable nombre con tu nombre como valor
Declarar una variable apellido con tu apellido como valor
Mostrar en consola el siguientes mensajes:
Mi nombre es nombre y tiene nombre.length letras
Mi nombre es apellido y tiene apellido.length letras
Utilizar console.log() para cada mensaje
Se puede utilizar variables auxiliares para la cantidad de letras que tienen los valores de las variables nombre y apellido*/

/*var nombre = 'Michelle';
var largo = nombre.length;
var apellido = 'Mullett';
var largoApellido = apellido.length;

console.log('Mi nombre es ' + nombre + ' y tiene ' + nombre.length + ' letras');
console.log('Mi apellido es ' + apellido + ' y tiene ' + apellido.length + ' letras');*/

//Ejercicio 40
/*Declarar la variable texto con el siguiente valor: Usando el método
Declarar la variable metodo con el siguiente valor: concat
Mostrar en consola el siguiente texto utilizando el método de string concat: Usando el método concat*/

/*var texto = 'Usando el metodo';
var metodo = 'concat';

console.log(texto.concat(' ', metodo));*/

//Ejercicio 41
/*Declarar la variable texto y asignar el siguiente valor: HOLA MUNDO
Mostrar en consola el contenido de la variable texto en minúscula*/

/*var texto = 'HOLA MUNDO';

console.log(texto.toLocaleLowerCase());*/

//Ejercicio 42
/*Declarar la variable texto y asignar el siguiente valor: hola mundo
Mostrar en consola el contenido de la variable texto en mayúscula*/

/*var texto = 'hola mundo';

console.log(texto.toUpperCase());*/

//Ejercicio 43
/*Declarar una variable texto con el siguiente valor: the dark knight
Declarar 3 variables en una línea con los siguientes nombres:
primerLetra
segundaLetra
tercerLetra
Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
Asignar a la variable segundaLetra el caracter número 4 del contenido de la variable texto
Asignar a la variable tercerLetra el caracter número 9 del contenido de la variable texto
Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
Mostrar en consola el contenido de la variable resultado en mayúscula
Deberías ver TDK como resultado*/

/*var texto = 'the dark knight';
var primerLetra, segundaLetra, tercerLetra;

primerLetra = texto.charAt(0);
segundaLetra = texto.charAt(4);
tercerLetra = texto.charAt(9);

var resultado = primerLetra.concat(segundaLetra, tercerLetra);

console.log(resultado.toUpperCase());*/

//Ejercicio 44
/*Declarar la variable texto y asignar el siguiente valor: HOLA
Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
Mostrar en consola el contenido de la variable resultado en minúscula
Deberías ver como resultado la palabra aloh*/

/*var texto = 'HOLA';
var primerLetra, segundaLetra, tercerLetra, cuartaLetra;
primerLetra = texto.charAt(3);
segundaLetra = texto.charAt(2);
tercerLetra = texto.charAt(1);
cuartaLetra = texto.charAt(0);

var resultado = primerLetra.concat(segundaLetra, tercerLetra, cuartaLetra);

console.log(resultado.toLowerCase());*/

//Ejercicio 45
/*Declarar la variable mensaje y establecer el siguiente valor: 'Ada Lovelace fue la ayudante de Charles Babbage.'
Declarar la variable programadora
Utilizar el método slice para obtener el nombre Ada Lovelace del texto en la variable mensaje y asignarlo a la variable programadora
Utilizar la variable programadora y la concatenación de textos para mostrar en consola el siguiente mensaje: "¡Ada Lovelace la primer programadora de la historia!*/

/*var mensaje = 'Ada Lovelace fue la ayudante de Charles Babbage.';
var programadora;
var resultado = mensaje.slice(0, 12);
programadora = resultado;

console.log('¡' + programadora.concat(' la primer programadora de la historia!'));*/

//Ejercicio 46
/*Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'ada2019,12345'
Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario (ada2019)
Declarar la variable password y utilizar el método substr para obtener el password (12345)
Mostrar en consola el siguiente mensaje: El usuario ${nombreDeUsuario} tiene ${password} como password*/

/*var usuarioYPassword = 'ada2019,12345';
var nombreDeUsuario = usuarioYPassword.substr(0, 7);
var password = usuarioYPassword.substr(8, 5);

console.log('El usuario', nombreDeUsuario, 'tiene', password, 'como password');*/

//Ejercicio 48 (no hay 47)
/*Declarar la variable piString y guardar el valor 3.14 como String
Declarar la variable constanteString y guardar el valor 42 como String
Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
Mostrar en consola el contenido de la variable resultado
Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene la variable pi y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.*/

/*var piString = '3.14';
var constanteString = '42';
var pi = parseFloat(piString);
var constante = parseInt(constanteString);
var resultado = pi + constante;

console.log(resultado, 'es el resultado de sumar las variables', pi.toString(), 'y', constante.toString(), 'donde', pi.toString(), 'es el valor que tiene la variable pi y', constante.toString(), 'es el valor de la variable constante');*/

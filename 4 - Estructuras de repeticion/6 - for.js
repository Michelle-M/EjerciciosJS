//Ejercicio 86
//Modificar el código 76 utilizando la estructura for en lugar de do/while

/*var numero = 0;

for ( numero = 0; numero <= 10; numero++ ) { 
    console.log(numero);
}*/

//Ejercicio 87
//Modificar el código 77 utilizando la estructura for en lugar de do/while

/*var numero = 0;

for ( numero = 0; numero <= 100; numero++ ) {
    console.log(numero);
}*/

//Ejercicio 88
//Modificar el código 78 utilizando la estructura for en lugar de do/while

/*var numero = 0;

for ( numero = 0; numero <= 1000; numero++ ) {
    console.log(numero);
}*/

//Ejercicio 89
//Modificar el código del 79 utilizando la estructura for en lugar de do/while

/*var numero1 = 0; 
var numero2 = 1; 
//var resultado = numero1 + numero2;

for ( numero1 = 0; numero2 <= 1000; numero2++ ) {
    console.log(numero1 + numero2);
    numero1 = numero1 + numero2;
}*/

//Ejercicio 90
//Modificar el código 80 utilizando la estructura for en lugar de do/while

/*var numero1 = 1; 
var numero2 = 3; 

for ( numero1 = 1; numero2 <= 1000; numero2 += 2 ) {
    console.log(numero1 + numero2);
    numero1 = numero1 + numero2;
}*/

//Ejercicio 91
//Modificar el código 81 utilizando la estructura for en lugar de do/while

/*var numero1 = 9; 
var numero2 = 1;

for ( numero1 = 9; numero2 <= 10; numero2++) {
    console.log(numero1 * numero2);
}*/

//Ejercicio 92
//Modificar el código 82 utilizando la estructura for en lugar de do/while

/*var numero = 1;
var f = '*';

for ( f = '*'; numero <= 12; numero++ ) {
    console.log(f);
    f = f + '*'
}*/

//Ejercicio 93

/*var a = '';
var base = 12;
var resta = 12;

for ( a = ''; base > 0; base--) { //para que la base que es mayor a 0 se vaya reduciendo en 1 
    for ( a = ''; resta > 0; resta--) { //para que la resta que es mayor a 0 se vaya reduciendo en 1
        a = a + '*'; 
    }
    console.log(a);
    resta = base - 1; 
}*/ 

//Ejercicio 94

/*var f = '*';
var filas = 0;

for ( f = '*'; filas <= 7; filas++ ) {
    console.log(f);
    f = f + '**';
}*/

//Ejercicio 95

/*var a = 0; 
var b = 1;
var c = 1; 
var contador = 1; 

for ( a = 0; contador <= 10; contador++ ) {
    console.log(a);
    a = b; 
    b = c; 
    c = a + b; 
}*/ //Me pone un 144 al final en vez de 10

//Ejercicio 96
//Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000

/*var numero = 0;

for ( numero = 0; numero <= 1000; numero += 10 ) {
    console.log(numero);
}*/

//Ejercicio 97
//Mostrar en consola los números desde el 1000 hasta el 0
//Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**

/*var numero = 1000;

for ( numero = 1000; numero >= 0; numero-- ) {
    if ( numero % 10 == 0  ) {
        console.log('**' + numero + '**')
    } else {
        console.log(numero);
    }
}*/
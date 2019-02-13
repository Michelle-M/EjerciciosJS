//Ejercicio 66

/*var numero = 0;

while ( numero < 11 ) { //puede ir cualquier cosa, no hace falta que sea booleano (aunque lo fuerza igual) //siempre va a ser verdadera, pero tengo que lograr que sea falsa dentro de las llaves, por eso sumo de a uno
    console.log(numero);
    numero++; //ahora vale 1 y repite hasta llegar a <11, asi va sumando de a 1 siempre y se termina tornando falso para frenar
}*/

//Ejercicio 67

/*var numero = 0;

while ( numero < 101 ) {
    console.log(numero);
    numero++;
}*/

//Ejercicio 68

/*var numero = 0;

while ( numero < 1001 ) {
    console.log(numero);
    numero++;
}*/

//Ejercicio 69

/* 0 + 1 = 1
   1 + 2 = 3 // el resultado pasa a ser el primer termino de la suma
   3 + 3 = 6
   6 + 4 = 10
   10 + 5 = 15
   ... */

/*var numero1 = 0; //principio primer termino a sumar
var numero2 = 1; // principio termino que se suma ---> crecen de a uno
//var resultado = numero1 + numero2;

while ( numero2 <= 1000 ) {
    console.log(numero1 + numero2); //si quiero ver cuanto vale cada num anoto asi: ('numero1', numero1, 'numero2', numero2, 'resultado', numero1 + numero2)
    numero1 = numero1 + numero2; //como el primer termino pasa a ser el resultado, por eso es igual a n1 + n2
    numero2++; //crece de uno en uno
}*/

//Ejercicio 70

/*var numero1 = 1; 
var numero2 = 3; //solo impares

while ( numero2 <= 1000 ) {
    console.log(numero1 + numero2);
    numero1 = numero1 + numero2
    numero2 += 2; //Los impares son sumas de dos del numero base 3 + 2 = 5 / 5 + 2 = 7 / 7 + 2 = 9
}*/ //LEER EL CODIGO EN VOZ ALTA PENSANDO LO QUE VA A HACER

//Ejercicio 71

/*var numero1 = 9; //o puedo no tener esta variable
var numero2 = 1;

while ( numero2 <= 10 ) {
    console.log(numero1 * numero2); //puedo poner el 9 solo
    numero2++;
}*/ 

//Ejercicio 72

/*var asterisco = '*';
var filas = 0;
var dibujo = '';

while ( filas < 13 ) {
    dibujo+=asterisco;
    console.log(dibujo);
    filas++;
}*/ //Esta va ok

//Otra forma de hacerlo

/*var f = '*';

while ( f.length <= 12 ) {
    console.log(f);
    f = f + '*';
}*/

//Otra forma de hacerlo 2

/*var numero = 1;
var f = '*';

while ( numero <= 12 ) {
    console.log(f);
    f = f + '*';
    numero++
}*/

//Ejercicio 73 - Metodo de slice 

/*var asterisco = '************';
var filas = 12;
var dibujo = '';

while ( filas <= 13 ) {
    dibujo = asterisco.slice(0,filas); //va eliminando las estrellitas
    console.log(dibujo);
    filas--;
}*/

//Ejercicio 73 - con while dentro del while

/*var a = '';
var base = 12;
var resta = 12; 

while ( base > 0 ) { 
    while ( resta > 0 ) { //uso un while dentro de otro porque no tengo como restar
        a = a + '*';
        resta--;
    }
    console.log(a);
    resta = base - 1;
    a = '';
    base--;
}*/

//Ejercicio 74

/*var f = '*';
var filas = 0;

while ( filas <= 7 ) {
    console.log(f);
    f = f + '**';
    filas ++;
}*/

//Ejercicio 75

/*Serie Fibonacci 0   1   1   2   3   5   8   13...
                  a + b = c
                      a + b = c
                          a + b = c
                              a + b = c
                                  a + b = c
                                      a + b = c //Suma el anterior y se van moviendo
                  

/*var a = 0; 
var b = 1;
var c = 1; //o a+b;
var contador = 1; //cantidad de vueltas

while ( contador <= 10 ) {
    console.log(a);
    a = b; // al irse moviendo a pasa a ser b
    b = c; // y b pasa a ser c
    c = a + b; // y c siempre es la suma de a y b
    contador++;
}*/
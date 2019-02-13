//Ejercicio 100

/*var asterisco = '*****';
var filas = 0;

for ( asterisco = '*****'; filas <= 4; filas++ ) { //si pongo 5, en consola me muestra (6)*****
    console.log(asterisco);
    asterisco = asterisco;
}*/

//Ejercicio 101

/*var cincoAsteriscos = '*****';
var dosAsteriscos = '*   *';
var filas = 0;

for ( dosAsteriscos = '*   *'; filas <= 3; filas++ ) {
    for ( cincoAsteriscos = '*****'; filas <= 0; filas++ ) {
        console.log(cincoAsteriscos);
        cincoAsteriscos = cincoAsteriscos;
    }
    console.log(dosAsteriscos);
    dosAsteriscos = dosAsteriscos;
} for ( cincoAsteriscos = '*****'; filas <= 4; filas += 1) {
    console.log(cincoAsteriscos);
    cincoAsteriscos = cincoAsteriscos;
}*/

//Ejercicio 102

/*var ochoAsteriscos = '* * * * * * * *';
var sieteAsteriscos = ' * * * * * * * ';
var filas = 0;

for ( ochoAsteriscos = '* * * * * * * *'; filas <= 1; filas += 2) {
    for ( sieteAsteriscos = ' * * * * * * * '; filas <= 2; filas += 2) {
        console.log(sieteAsteriscos);
        sieteAsteriscos = sieteAsteriscos;
    } 
    console.log(ochoAsteriscos);
    ochoAsteriscos = ochoAsteriscos;
}*/

//Ejercicio 103

/*var asteriscoPrincipio = '*';
var asteriscoResta = '';
var filas = 0;
var resta = 4;

for ( asteriscoPrincipio = '*'; filas <= 4; filas++ ) {
    console.log(asteriscoPrincipio);
    asteriscoPrincipio = asteriscoPrincipio + '**';
} for ( asteriscoResta = ''; filas > 0; filas-- ) {
    console.log(asteriscoResta);
    resta = filas - 2;
}*/

//Ejercicio 104
//Partiendo del siguiente código, realizar la suma de todos los números pares que hay entre el valor guardado en la variable n y el valor guardado en m (incluyéndolo)

/*10 + 12 = 22
  22 + 14 = 36
  36 + 16 = 52
  52 + 18 = 70
  70 + 20 = 90
  90 + 22 = 112
  112 + 24 = 136
  136 + 26 = 162
  n     m  = n + m

var n = 10;
var m = 12; //modifiqué el valor por el 12 que es el inicio / 26 pasa a ser el valor final donde termina la suma
//var resultado = n + m;

for ( n = 10; m <= 26; m += 2) {
    console.log(n + m);
    n = n + m;
}*/

//IMPORTANTE!!!!!!!! -  REHACER CON EL ESTANDAR

//a = '*'

//for (let index = 0; index < array.length /*o un numero*/; index++) { //seria i (el estandar)
    //console.log(i)
    //ADENTRO PONGO LO A
    //a = a + '*'
//}*/

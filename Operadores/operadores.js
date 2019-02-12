//Ejercicio 27
/*Para cada operación mostrar el mensaje de la siguiente forma:
Ejemplos: sumo 2 + 3 y el resultado es 5 (donde 2 y 3 son los valores de las variables y 5 es el resultado de la operación)
Mostrar en consola el resultado de la suma de las dos variables
Mostrar en consola el resultado de la resta de las dos variables
Mostrar en consola el resultado de la multiplicación de las dos variables
Mostrar en consola el resultado de la división de las dos variables
Mostrar en consola el resultado del resto de las dos variables*/

/*var numero1 = 9;
var numero2 = 7;

console.log( numero1 + numero2) ;
console.log( numero1 - numero2 );
console.log( numero1 * numero2 );
console.log( numero1 / numero2 );
console.log( numero1 % numero2 );*/

//Ejercicio 28
/*Declarar la variable numero y asignar el valor 9
Mostrar en consola la tabla del 9 de 1 a 10 usando la variable numero*/

/*var numero = 9;

console.log( numero * 1);
console.log( numero * 2);
console.log( numero * 3);
console.log( numero * 4);
console.log( numero * 5);
console.log( numero * 6);
console.log( numero * 7);
console.log( numero * 8);
console.log( numero * 9);
console.log( numero * 10);*/

//Ejercicio 29
/*Calcular y mostrar en consola el perímetro de un cuadrado (el perímetro es simplemente cuatro veces la longitud del lado)
La longitud del lado es de 10*/

/*var lado = 10;

console.log('Perimetro: ' + (lado * 4));*/

//Ejercicio 30
/*Calcular y mostrar en consola el área de un cuadrado (lado al cuadrado)
La longitud del lado es de 5*/

/*var lado = 5;

console.log( lado * lado );*/

//Ejercicio 31
/*Calcular y mostrar en consola el perímetro de un triangulo (sumar los lados)
El lado 1 es de 10
El lado 2 es de 20
El lado 3 es de 5*/

/*var lado1 = 10;
var lado2 = 20;
var lado3 = 5;

console.log( 'Perimetro: ' + (lado1 + lado2 + lado3));*/

//Ejercicio 32
/*Declarar la variable altura y asignar el valor 10
Declarar la variable base y asignar el valor 4
Mostrar en consola el cálculo del perímetro (suma de los lados) y el área (base por altura).*/

/*var altura = 10;
var base = 4;

console.log( 'Perimetro: ' + (base + altura));
console.log( 'Area: ' + (base * altura));*/

//Ejercicio 33
/*Declarar la cariable cantidadDePersonas y asignar el valor 100
Incrementar la cantidad de personas en 5
Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
Se dieron de baja 3 personas
Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
Compramos una empresa y los personas se duplicaron
Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas*/

/*var cantidadDePersonas = 100;
cantidadDePersonas += 5;

console.log( 'Cantidad de personas: ' + cantidadDePersonas );

cantidadDePersonas -= 3;

console.log( 'Cantidad de personas: ' + cantidadDePersonas );

cantidadDePersonas *= 2;

console.log( 'Cantidad de personas: ' + cantidadDePersonas );*/

//Ejercicio 34
/*Declarar 3 variables con los siguientes nombres: ingresos, ganancias, impuestos
Asignar los siguientes valores a cada variable según corresponda:
ingresos: asignar el valor 1000
ganancias: asignar el valor 600
impuestos: asignar el valor 500
Este mes se esperan los siguientes objetivos:
Generar al menos 800 pesos o más de ingreso
Gastar menos de 400 pesos de impuestos
Se Paga bono si se ganan 600 pesos de ganancias justo
Mostrar en consola los siguientes mensajes utilizando los operadores esperados:
Objetivo de ingresos: true o false
Utilizar el operador mayor o igual que
Objetivo de impuestos: true o false
Utilizar el operador menor que
Bono de ganancias: true o false
Utilizar el operador de q simple*/

/*var ingresos = 1000;
var ganancias = 600;
var impuestos = 500;

if (ingresos >= 800) {
    console.log('Objetivo de ingresos: ' + true);
} else if (ingresos < 800) {
    console.log('Objetivo de ingresos: ' + false);
}

if (impuestos > 400) {
    console.log('Objetivo de impuestos: ' + false)
} else if (impuestos <= 400) {
    console.log('Objetivo de impuestos: ' + true)
}

if (ganancias = 600) {
    console.log('Bono de ganancias: ' + true)
}*/

//Ejercicio 35

/*Declar la variable number numeroDeCliente y asignar el valor 143245
Declar la variable numeroDeClienteIngresado y asignar el valor '143245'
Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor)
Utilizar el siguiente mensaje: El número ingresado por el cliente es correcto: true o false
Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor y tipo de dato)
Utilizar el siguiente mensaje: El cliente ingresó un número de cliente válido: true o false*/

/*var numeroDeCliente = '143245';

if ( numeroDeCliente === '143245' ) {
    console.log('El número ingresado por el cliente es correcto');
} else {
    console.log('El número ingresado por el cliente es incorrecto');
}*/

//Ejercicio 36
/*Declarar las siguientes variables numero1 y numero2
Asignar a numero1 el valor 10
Asignar a numero2 el valor 20
Mostrar en consola los siguientes mensajes:
La variable numero1 y numero2 tienen el mismo valor: true/false
La variables numero1 y numero2 son distintas: true/false*/

/*var numero1 = 10;
var numero2 = 20;

if ( numero1 === numero2 ) {
    console.log('Son iguales');
} else {
    console.log('Son distintos');
}*/

//Ejercicio 37
/*Declarar las variables promedioParaAprobar y promedioDelAlumno
Asignar a promedioParaAprobar el valor 6
Asignar a promedioDelAlumno el valor 4
Mostrar en consola los siguientes mensajes:
El alumno tiene un promedio mayor o igual que el requerido: true/false
Al alumno le faltaron ${puntos} para aprobar*/

/*var promedioParaAprobar = 6;
var promedioDelAlumno = 4;

if ( promedioDelAlumno >= promedioParaAprobar ) {
    console.log( 'Pasa el promedio de 6');
} if ( promedioDelAlumno <= promedioParaAprobar ) {
    console.log( 'No llega con el promedio. Le faltaron ' + (promedioParaAprobar - promedioDelAlumno) + ' puntos para aprobar');
}*/
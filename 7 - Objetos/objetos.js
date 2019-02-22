//Ejercicio 001
/*Declarar una variable con el nombre de persona y asignar un objeto vacío
Mostrar en consola el objeto persona*/

/*var persona = {};

console.log(persona);*/

//Ejercicio 002
/*Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: nombre, apellido, edad
Mostrar en consola el objeto sobreMi*/

/*var sobreMi = {
    nombre: 'Michelle',
    apellido: 'Mullett',
    edad: 25,
}

console.log(sobreMi);*/

//Ejercicio 003
/*Crear una variable llamada user, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: fullname, email, age
Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"*/

/*var user = {
    fullname: 'Morena',
    email: 'morenathecat@gmail.com',
    age: 1,
}

console.log(user);

console.log('Hola, mi nombre es ' + user.fullname + ' y tengo ' + user.age + ' años');*/

//Ejercicio 004
/*Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)*/

/*var song = {
  title: 'Rock and Roll',
  bandName: 'Led Zeppelin',
  duration: 166000,
  album: 'Led Zeppelin IV'
}

var cancion = {
  title: song.title,
  bandName: song.bandName,
  duration: song.duration / 10,
  album: song.album,
}

console.log(cancion)*/

//Ejercicio 005
/*Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados*/

// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

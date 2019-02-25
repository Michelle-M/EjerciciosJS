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

/*var personaUno = {
  id: 1,
  nombre: 'Ada Lovelace',
  mail: 'ada@gmail.com',
  telefono: 1234567890,
}

var personaDos = {
  id: 2,
  nombre: 'Grace Hopper',
  mail: 'grace@hotmail.com',
  telefono: 0987654321,
}

var personaTres = {
  id: 3,
  nombre: 'Hedy Lamarr',
  mail: 'hedy@gmail.com',
  telefono: 6789054321,
}

var personaCuatro = {
  id: 4,
  nombre: 'Radia Perlman',
  mail: 'radia@yahoo.com',
  telefono: 1234509876,
}

var personaCinco = {
  id: 5,
  nombre: 'Sheryl Sandberg',
  mail: 'Sheryl@facebook.com',
  telefono: 5432167890,
}

console.log(personaUno);
console.log(personaDos);
console.log(personaTres);
console.log(personaCuatro);
console.log(personaCinco);*/

//Ejercicio 006
/*Copiá y pegá los objetos creados en el ejercicio obj_005
Nos pidieron mostrar en la consola los siguientes datos de cada persona:*/

/*var personaUno = {
  id: 1,
  nombre: 'Ada Lovelace',
  mail: 'ada@gmail.com',
  telefono: 1234567890,
}

var personaDos = {
  id: 2,
  nombre: 'Grace Hopper',
  mail: 'grace@hotmail.com',
  telefono: 0987654321,
}

var personaTres = {
  id: 3,
  nombre: 'Hedy Lamarr',
  mail: 'hedy@gmail.com',
  telefono: 6789054321,
}

var personaCuatro = {
  id: 4,
  nombre: 'Radia Perlman',
  mail: 'radia@yahoo.com',
  telefono: 1234509876,
}

var personaCinco = {
  id: 5,
  nombre: 'Sheryl Sandberg',
  mail: 'Sheryl@facebook.com',
  telefono: 5432167890,
}

//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log(personaUno.nombre);

// 2. El ID de Grace
console.log(personaDos.id);

// 3. El email de Hedy
console.log(personaTres.mail);

// 4. El ID y nombre de Radia
console.log(personaCuatro.id + ' ' + personaCuatro.nombre);

// 5. El telefono de Sheryl
console.log(personaCinco.telefono);*/

//Ejercicio 007
/*Tenemos la variable datos que tiene un objeto con los datos de una persona
El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.*/

/*var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: '29',
  programa: true
}

datos.telefono = '0192837465';
datos.edad = 29;

console.log(datos);*/

//Ejercicio 008
/*Tenemos la variable datos con un objeto que guarda datos de personas
Tenemos que programar la siguiente lógica
SI la propiedad programa es true
Agregá la propiedad lenguajeFavorito, y asignale "Javascript"*/

/*var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
}

if ( datos.programa === true ) {
  datos.lenguajeFavorito = 'Javascript';
}

console.log(datos);*/

//Ejercicio 009
/*Tenemos la variable datos con un objeto que guarda datos de una persona
Tenemos que programar la siguiente lógica
SI la propiedad programa es true
Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"*/

/*var datos = {
  id: 1,
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  telefono: '1234567890',
  edad: 29,
  programa: true
};

if ( datos.programa === true ) {
  datos.lenguajesFavoritos = ['Javascript', 'Phyton'];
}

console.log('Hola, mi nombre es ' + datos.nombre + ' y programo en ' + datos.lenguajesFavoritos);*/

//Ejercicio 010
/*Tenemos la variable disco con un objeto que guarda datos de un album musical
Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
Completá el código para lograr el resultado esperado*/

/*var disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

var nombreDisco = disco.nombre;
var anioDisco = disco.anioLanzamiento;
var nombreBanda = disco.banda.nombre;

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);*/

//Ejercicio 011
/*Tenemos la variable user, que es un objeto con datos de una persona en linkedin
En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills*/

/*var user = {
  id: 123456789,
  name: 'Ada Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS']
};

user.skills.push('Javascript');

console.log(user);*/

//Ejercicio 012
/*Tenemos la variable user, que es un objeto con datos de una persona en linkedin
En el objeto tenemos dos propiedades: firstName y lastName
Por un cambio en los requerimientos del proyecto, necesitamos que el nombre sea un objeto con el siguiente formato:*/

/*var user = {
  name: {
    first: 'Grace',
    last: 'Hopper'
  },
  // y las demas propiedades
}*/

/*Tenemos que crear un nuevo objeto, y guardarlo en la variable newUser, conteniendo las mismas propiedades excepto firstName y lastName. El nombre hay que guardarlo con el formato expresado en el punto anterior.
Completa el código para conseguir el resultado esperado*/
/*var user = {
  id: 123456789,
  firstName: 'Ada',
  lastName: 'Lovelace',
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS', 'JS'],
};

var newUser = {
  id: 123456789,
  name: {
    first: 'Ada',
    last: 'Lovelace'
  },
  url: 'https://www.linkedin.com/in/ada-lovelace',
  skills: ['HTML', 'CSS', 'SASS', 'JS'],
}

// despues de la solucion
console.log(newUser);*/

//Ejercicio 013
/*Creá un objeto donde vamos a guardar información sobre una playlist de spotify
El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:
Lista de Nirvana
Privada: Si
Canciones:
Smells Like Teen Spirit
In Bloom
Come As You Are
Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la propiedade privada es false*/

/*var listaDeNirvana = {
  nombre: 'Playlist de Nirvana',
  privada: true,
  canciones: [
    'Smells Like Teen Spirit',
    'In Bloom',
    'Come As You Are',
  ],
}

console.log(listaDeNirvana.nombre);
if ( listaDeNirvana.privada === true ) {
  listaDeNirvana.privada = 'Si';
  console.log(listaDeNirvana.privada);
}
console.log(listaDeNirvana.canciones);*/

//Ejercicio 014
/*Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Iterá/Recorré el array utilizando forEach y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6*/

var ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];

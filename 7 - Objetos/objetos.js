//Introduccion

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

//Ejercicio 15
/*Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Iterá/Recorré el array utilizando un ciclo for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6*/

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

//Ejercicio 016
/*Tenemos un array de objetos, con las canciones de un disco de Nirvana
Cada objeto representa una canción, y tiene las propidades id, nombre, duracion (en segundos)
Queremos calcular:
La duración total del disco (suma de la duración de cada canción)
La duración promedio por canción (un promedio entre todas las duraciones)*/

/*var nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
];

var cancionUno = nevermind[0];
var cancionDos = nevermind[1];
var cancionTres = nevermind[2];
var cancionCuatro = nevermind[3];
var cancionCinco = nevermind[4];

var duracionTotal = cancionUno.duracion + cancionDos.duracion + cancionTres.duracion + cancionCuatro.duracion + cancionCinco.duracion;
console.log(duracionTotal);

var duracionPromedio = duracionTotal / 5;
console.log(duracionPromedio);*/

//Ejercicio 017
/*Tenemos un array de objetos, que representa un listado de bandas
Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
Mostrar en consola cada banda del array, con la siguiente lógica:
Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"*/

/*var bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

for ( var i = 0; i < bandas.length; i++ ) {
  if ( bandas[i].activa === true ) {
    console.log(bandas[i].nombre + ' está activa desde el año ' + bandas[i].fundacion);
  } else if ( bandas[i].activa === false ) {
    console.log(bandas[i].nombre + ' no está activa');
  }
}*/

//Ejercicio 018
/*Tenemos un objeto en la variable banda, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
Queremos mostrar:
La duración total del disco (suma de la duración de cada canción)
La duración promedio por canción (un promedio entre todas las duraciones)*/

/*var banda = {
  name: 'Led Zeppelin',
  year: 1968,
  active: false,
  thumbnail: 'http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75',
  members: [ 'Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham' ],
  albums: [
    { name: 'Led Zeppelin', year: 1969, songs: ['Good Times, Bad Times', "Communication Breakdown" ], duration: 2691 },
    { name: 'Led Zeppelin II', year: 1969, songs: [ "Whole Lotta Love", "Moby Dick", "Ramble On" ], duration: 2502 },
    { name: 'Led Zeppelin III', year: 1970, songs: [ "Immigrant Song" ], duration: 2489 },
    { name: 'Led Zeppelin IV', year: 1971, songs: [ "Rock and Roll", "Stairway to Heaven", "Four Sticks" ], duration: 2559 },
  ]
};

var anioLanzamiento = banda.year;
var cantidadMiembros = banda.members.length;
var miembros = banda.members;
var cantidadDiscos = banda.albums.length;

//Para canciones

var cancionesUno = banda.albums[0];
var cancionesDos = banda.albums[1];
var cancionesTres = banda.albums[2];
var cancionesCuatro = banda.albums[3];
var cantidadTotalCanciones = cancionesUno.songs.length + cancionesDos.songs.length + cancionesTres.songs.length + cancionesCuatro.songs.length;

//Para duracion

var duracionUno = banda.albums[0];
var duracionDos = banda.albums[1];
var duracionTres = banda.albums[2];
var duracionCuatro = banda.albums[3];
var duracionTotal = duracionUno.duration + duracionDos.duration + duracionTres.duration + duracionCuatro.duration;
var promedioDuracion = duracionTotal / cantidadTotalCanciones;

///// RESULTADO
console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
console.log("Tiene en total " + cantidadDiscos + " discos");
console.log("Tiene en total " + cantidadTotalCanciones + " canciones entre todos los discos.");
console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");*/

//Propiedades dinamicas

//Ejercicio 019
/*Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
Declarar una variable con el nombre propiedadEdad y asignar el valor edad
Crear un objeto persona con las propiedades nombre y edad
Asignar a las propiedades del objeto persona tu nombre y edad
Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad*/

//Ejercicio 020
/*Partiendo de un objeto guardado en la variable producto
Mostrar en la consola el nombre de todas las propiedades que tiene el producto
Utilizar el método keys*/

var producto = {
  id: 'ADA-020',
  title: 'Gubergren sed est amet voluptua',
  price: 123.75,
  picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
  condition: 'nuevo',
  free_shipping: true,
  location: 'Capital Federal'
};

// completá acá el código
var todasLasPropiedades = ;

console.log(todasLasPropiedades);

//Ejercicio 021
/*Partiendo de un objeto guardado en la variable producto
Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
Utilizar el método keys
El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"*/

var producto = {
  id: 'ADA-020',
  title: 'Gubergren sed est amet voluptua',
  price: 123.75,
  picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
  condition: 'nuevo',
  free_shipping: true,
  location: 'Capital Federal'
};

//Ejercicio 022
/*Partiendo de un objeto guardado en la variable user
Verificar si tiene la propiedad email
Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'*/

var user = {
  username: 'ada_lovelace',
  password: '1234567890!'
};

//Ejercicio 023
/*Completa el código dentro de la función hasProperty
Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
Sino retorna false
function hasProperty(object, property) {
  // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
  // property es un string
  // sino return false
}*/

var user = {
  username: 'ada_lovelace',
  password: '1234567890!'
};

var user2 = {
  username: 'grace_hopper',
  password: '1234567890!',
  email: 'grace@hopper.com'
};

console.log( hasProperty(user, 'email') ); // false
console.log( hasProperty(user, 'password') ); // true
console.log( hasProperty(user, 'id') ); // false

console.log( hasProperty(user2, 'email') ); // true
console.log( hasProperty(user2, 'password') ); // true
console.log( hasProperty(user2, 'id') ); // false

//Metodos

//Ejercicio 024
/*Declarar la variable holaMundo y asignarle un objeto con las siguiente propiedades:
mostrarMensaje: una función que muestra en consola el mensaje '¡Hola mundo!'
obtenerMensaje: una función que retorna un string con el mensaje "¡Alo mundo!"*/

/*var holaMundo = {
  mostrarMensaje: function() {
    console.log('¡Hola mundo!')
  },
  obtenerMensaje: function() {
    return '¡Alo mundo!'
  }
}

console.log(holaMundo.mostrarMensaje());
console.log(holaMundo.obtenerMensaje());*/

//Ejercicio 025
/*Tenemos una variable pelicula, con propiedades que guardan información sobre una película
Necesitamos agregar un método/función mostrarInfo que muestre por consola el mensaje: "Película: [NOMBRE PELI] - Año: [AÑO PELI]"*/

/*var pelicula = {
  titulo: 'The Dark Knight',
  anio: 2008,
  director: 'Christopher Nolan',
  mostrarInfo: function() {
    console.log('Pelicula: ' + pelicula.titulo + ' - Año: ' + pelicula.anio)
  }
}

pelicula.mostrarInfo();*/

//Ejercicio 026
/*Tenemos una variable playlist, con información sobre una playlist de spotify
El objeto tiene una propiedad songs que es un array vacío
Al objeto vamos a agregarle un método que se llame addSong
Este método va a recibir un string como parámetro (el nombre de una canción) y va a agregarlo en la propiedad songs del objeto.
Después de crear la función, agregá las siguientes 3 canciones utilizando playlist.addSong: 'Geronimo', 'Sissy That Walk', 'Cover Girl'
// TODO: agregar en el objeto el método addSong, que recibe como parámetro el nombre de una canción a agregar en el array songs*/

/*var playlist = {
  name: 'Rupaul Lipsyncs',
  owner: 'Ada',
  followers: 8743,
  songs: [],
  addSong: function(canciones) {
    return playlist.songs.push(canciones);
  }
}

playlist.addSong('Geronimo');
playlist.addSong('Sissy That Walk');
playlist.addSong('Cover Girl');

console.log(playlist.songs);*/

//Ejercicio 027
/*Tenemos una variable user, con información sobre una persona (firstName, lastName, age)
Al objeto vamos a agregarle un método que se llame getFullname, que no tiene parámetros y tiene que retornar un string con el firstName y lastName concatenadas, separados por un espacio.
// TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona*/

/*var user = {
  firstName: 'Hedy',
  lastName: 'Lamarr',
  age: 30,
  getFullname: function() {
    return user.firstName + ' ' + user.lastName;
  }
};

console.log(user.getFullname());*/

//Ejercicio 028
/*Tenemos la misma variable user del ejercicio 027, con información sobre una persona, pero con una diferencia en la estructura.
Al objeto vamos a agregarle un método que se llame getFullname, que no tiene parámetros y tiene que retornar un string con el nombre completo de la persona
// TODO: agregar en el objeto el método getFullname, que tiene que retornar el nombre completo de la persona*/

/*var user = {
  name: {
    first: 'Hedy',
    last: 'Lamarr'
  },
  age: 30,
  getFullname: function() {
    return user.name.first + ' ' +  user.name.last;
  }
};

console.log(user.getFullname());*/

//Ejercicio 029
/*Tenemos un objeto shoppingCart, que guarda datos de un carrito de compras en una tienda virtual
Tiene dos propiedades: owner (un objeto con los datos de la persona que está haciendo la compra) y products (un array de objetos, con todos los productos que está por comprar)
Los objetos de los productos tienen 4 propiedades: id (un número), title (string, el nombre del producto), price (un número, el precio del producto) y freeShipping (un booleano que indica si el producto tiene o no cargos por envio)
Agregar al objeto shoppingCart un método addProduct que nos permita agregar objetos de productos al array products.
También necesitamos agregar un método getTotal que sume el precio de todos los productos que tenemos en el array products y nos devuelva el precio final total.
Crear los siguientes productos y agregarlos al carrito:*/
// 1,At vero elitr,320,true
// 2,Dolore ipsum est eos,230,false
// 3,Lorem sadipscing tempor,120.50,true
// 4,Duo invidunt accusam,510,false
// 5,Labore accusam eirmod.,125.99,true

// Ejemplo del formato de cada objeto del producto: 0,Mouse Genius,150,false
// var unMouse = {
//   id: 0,
//   title: "Mouse Genius",
//   price: 150,
//   freeShipping: false
// }
// objeto que guarda la información que quien hace la compra y que productos agregó al carrito

/*var shoppingCart = {
  owner: {
    id: 123,
    name: 'Ada Lovelace'
  },
  products: [],
  addProduct: function(productos) {
    return shoppingCart.products.push(productos);
  },
  getTotal: function () {
    return productoUno.price + productoDos.price + productoTres.price + productoCuatro.price + productoCinco.price;
  }
};

//Productos

var productoUno = {
  id: 1,
  title: 'Caja de lapices',
  price: 320,
  freeShipping: true,
}

var productoDos = {
  id: 2,
  title: 'Caja de mapas',
  price: 230,
  freeShipping: false,
}

var productoTres = {
  id: 3,
  title: 'Caja de temperas',
  price: 120.50,
  freeShipping: true,
}

var productoCuatro = {
  id: 4,
  title: 'Caja de plastilinas',
  price: 510,
  freeShipping: false,
}

var productoCinco = {
  id: 5,
  title: 'Caja de escuadras',
  price: 125.99,
  freeShipping: true,
}

shoppingCart.addProduct(productoUno);
shoppingCart.addProduct(productoDos);
shoppingCart.addProduct(productoTres);
shoppingCart.addProduct(productoCuatro);
shoppingCart.addProduct(productoCinco);

console.log( shoppingCart.products ); //chequeo que se agregaron

console.log( shoppingCart.getTotal() );*/

//Ejercicio 030
/*Copiar y pegar el código de la solución al ejercicio obj_029
Debido a un cambio de requerimiento, el precio final total se calcula distinto
Si un producto no tiene free shipping (freeShipping es false) entonces al precio del producto hay que sumarle 120
Si tiene free shipping (freeShipping es true) entonces se toma el precio que está en el objeto y no se le suma nada
Una vez calculado el total, hay que agregar un 21% de IVA*/
// COPIAR Y PEGAR LA SOLUCION EL EJERCICIO 029

var shoppingCart = {
  owner: {
    id: 123,
    name: 'Ada Lovelace'
  },
  products: [],
  addProduct: function(productos) {
    return shoppingCart.products.push(productos);
  },
  getTotal: function () {
    return productoUno.price + productoDos.price + productoTres.price + productoCuatro.price + productoCinco.price;
  }
};

//Productos

var productoUno = {
  id: 1,
  title: 'Caja de lapices',
  price: 320,
  freeShipping: true,
}

var productoDos = {
  id: 2,
  title: 'Caja de mapas',
  price: 230,
  freeShipping: false,
}

var productoTres = {
  id: 3,
  title: 'Caja de temperas',
  price: 120.50,
  freeShipping: true,
}

var productoCuatro = {
  id: 4,
  title: 'Caja de plastilinas',
  price: 510,
  freeShipping: false,
}

var productoCinco = {
  id: 5,
  title: 'Caja de escuadras',
  price: 125.99,
  freeShipping: true,
}

shoppingCart.addProduct(productoUno);
shoppingCart.addProduct(productoDos);
shoppingCart.addProduct(productoTres);
shoppingCart.addProduct(productoCuatro);
shoppingCart.addProduct(productoCinco);

console.log( shoppingCart.products ); //chequeo que se agregaron

console.log( shoppingCart.getTotal() );

//console.log( shoppingCart.getTotal() ); // 1629.2529

//Ejercicio 031
/*Copiar y pegar el código de la solución al ejercicio obj_030
Ahora tenemos que agregarle un método a shoppingCart que se llame render para mostrar el listado de productos a comprar con su precio y al final de todo el precio final total*/

// COPIAR Y PEGAR LA SOLUCION EL EJERCICIO 030

shoppingCart.render();
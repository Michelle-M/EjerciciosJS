//Codear dos objetos asignados a las variables Pikachu y Charmander
//Cada uno tiene tres propiedades nombre, vida y ataque
//Nombre es un string y vida y ataque son numeros

var jugadorUno = prompt('Elegi tu pokemon, Pikachu o Charmander' + '');
var jugadorDos = prompt('Elegi tu pokemon, Pikachu o Charmander' + '');


var pikachu = {
    nombre: 'Pikachu',
    vida: 100,
    ataque: 3,
    atacar: function(atacado) {
        atacado.vida = atacado.vida - this.ataque;
        return atacado.vida;
    }
} 

var charmander = {
    nombre: 'Charmander',
    vida: 200,
    ataque: 8,
    atacar: function(atacado) {
        atacado.vida = atacado.vida - this.ataque;
        return atacado.vida;
    }
}

if ( jugadorUno === 'pikachu' && jugadorUno === 'Pikachu' ) {
    jugadorUno = pikachu;
} else if ( jugadorUno === 'charmander' && jugadorUnos === 'Charmander') {
    jugadorUno = charmander;
}

if ( jugadorDos === 'pikachu' && jugadorDos == 'Pikachu') {
    jugadorDos = pikachu;
} else if ( jugadorDos === 'charmander' && jugadorDos === 'Charmander') {
    jugadorDos = charmander;
}

jugadorUno.atacar(jugadorDos);
jugadorDos.atacar(jugadorUno);

while ( charmander.vida >= 0 && pikachu.vida >= 0 ) {
    jugadorUno.atacar(jugadorDos);
    console.log('La vida de ' + jugadorDos.nombre + 'ahora es' + jugadorDos.vida);
    jugadorDos.atacar(jugadorUno);
    console.log('La vida de ' + jugadorUno.nombre + 'ahora es ' + jugadorUno.vida);
}

var ganoJugadorUno = 0;
var ganoJugadorDos = 0;

//console.log(jugadorUno);
//console.log(jugadorDos);

while ( ganoJugadorUno < 2 && ganoJugadorDos < 2 ) {
    var jugadorUno = prompt('Elegi piedra, papel o tijera');
    var jugadorDos = prompt('Elegi piedra, papel o tijera ');
    if ( jugadorUno == 'piedra' && jugadorDos == 'piedra' ) {
        console.log('Empate');
    } else if ( jugadorUno == 'piedra' && jugadorDos == 'tijera' ) {
        console.log('Gano jugador uno');
        ganoJugadorUno++;
    } else if ( jugadorUno == 'papel' && jugadorDos == 'piedra' ) {
        console.log('Gano jugador uno');
        ganoJugadorUno++;
    } else if ( jugadorUno == 'piedra' && jugadorDos == 'papel' ) {
        console.log('Gano jugador dos');
        ganoJugadorDos++;
    } else if ( jugadorUno == 'papel' && jugadorDos == 'tijera' ) {
        console.log('Gano jugador dos');
        ganoJugadorDos++;
    } else if ( jugadorUno == 'tijera' && jugadorDos == 'tijera' ) {
        console.log('Empate');
    } else if ( jugadorUno == 'tijera' && jugadorDos == 'piedra' ) {
        console.log('Gano jugador dos');
        ganoJugadorDos++;
    } else if ( jugadorUno == 'tijera' && jugadorDos == 'papel' ) {
        console.log('Gano jugador uno');
        ganoJugadorUno++;
    } else if ( jugadorUno == 'papel' && jugadorDos == 'papel' ) {
        console.log('Empate');
    }
}

if ( ganoJugadorUno == 2 ) {
    console.log('La partida la gano el jugador uno')
} else if ( ganoJugadorDos == 2 ) {
    console.log('La partida la gano el jugador dos');
}

var usuario = prompt('Ingrese un color: verde, azul, rojo' + '');

var primerLink = document.querySelector('a');
//console.log(primerLink) //probar si seleccione bien

if ( usuario === 'rojo' ) {
primerLink.classList.add('rojo') //agrego un a clase de css, no color
} else if ( usuario === 'verde') {
primerLink.classList.add('verde');
} else if ( usuario === 'azul') {
primerLink.classList.add('azul')
}

//Mas corto

primerLink.classList.add(usuario) //porque el usuario ingresa un string
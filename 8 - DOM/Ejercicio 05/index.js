var primerElemento = document.querySelector('a');
console.log(primerElemento)

if ( primerElemento.hasAttribute('class') === true ) {
    primerElemento.classList.add('azul')
} else if ( primerElemento.hasAttribute('class') === false ) {
    primerElemento.classList.add('rojo')
}
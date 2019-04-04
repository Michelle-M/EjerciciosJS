var titulo = document.querySelector('h1');
console.log(titulo);

var div = document.querySelector('div')
console.log(div);

if ( titulo.hasAttributes() === true ) {
    titulo.classList.add('tachado');
} else if ( titulo.hasAttributes() === false ) {
    titulo.classList.add('negrita');
}

if ( div.hasAttributes() === true ) {
    div.classList.add('tachado');
} else if ( div.hasAttributes() === false ) {
    div.classList.add('negrita')
}


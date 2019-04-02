var titulo = document.querySelector('h1');
console.log(titulo);

var div = document.querySelector('div')
console.log(div);

if ( titulo.hasAttributes() === true || div.hasAttributes() === true ) {
    titulo.classList.add('tachado');
    div.classList.add('tachado');
} else if ( titulo.hasAttributes() === false || div.hasAttributes() === false ) {
    titulo.classList.add('negrita');
    div.classList.add('negrita');
}


var body = document.querySelector('body');
console.log(body)
var titulo = document.createElement('h1');
titulo.textContent = 'Vestibulum suscipit nulla quis orci';
var parrafo = document.createElement('p');
parrafo.textContent = 'Donec venenatis vulputate lorem. Maecenas vestibulum mollis diam.';

body.appendChild(titulo);
body.appendChild(parrafo);

var titulo = document.querySelector('h1');
var interno = titulo.innerText;
console.log(interno);

var parrafo = document.querySelector('p');
var contenido = parrafo.textContent;
console.log(contenido);

titulo.innerText = 'Parrafo'
parrafo.textContent = 'Titulo'
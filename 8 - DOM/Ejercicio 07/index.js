var ul = document.querySelector('ul');

console.log(ul.children);

var segundoHijo = ul.children[1];

segundoHijo.classList.add('verde');

var cuartoHijo = ul.children[3];

cuartoHijo.classList.add('rojo')

console.log(segundoHijo.parentElement)

cuartoHijo.parentElement.classList.add('naranja')
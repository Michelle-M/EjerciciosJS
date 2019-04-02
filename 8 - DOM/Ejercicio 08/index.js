var primerLi = document.querySelectorAll('li');
console.log(primerLi)

var color = primerLi[0].classList.add('naranja');

primerLi[0].nextElementSibling.classList.add('naranja')
primerLi[1].nextElementSibling.classList.add('naranja')
primerLi[2].nextElementSibling.classList.add('naranja')
primerLi[3].nextElementSibling.classList.add('naranja')

//getElementsByName, getElementsByClassName, querySelectorAll ME TRAEN LISTAS
//querySelector y getElementById ME TRAEN UNO SOLO ELEMENTO
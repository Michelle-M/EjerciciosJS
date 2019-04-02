var body = document.querySelector('body');

var arrayDeNumeros = '';

var ul = document.createElement('ul');

for ( var i = 1; i <= 100; i++ ) {
    arrayDeNumeros = i;
    var li = document.createElement('li');
    li.textContent = 'Item ' + arrayDeNumeros;
    if ( i % 2 === 0 ) {
        li.classList.add('color1')
    } else {
        li.classList.add('color2')
    }
    ul.appendChild(li);
}

body.appendChild(ul);
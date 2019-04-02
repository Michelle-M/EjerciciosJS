var body = document.querySelector('body');

var ul = document.createElement('ul');

while ( usuario !== 'exit') {
    var usuario = prompt('Ingrese un numero: ' + '');
    if ( usuario !== 'exit' ) {
        var li = document.createElement('li');
        li.textContent = prompt();
        if ( li % 2 === 0 ) {
            li.classList.add('color1')
        } else if ( li % 2 !== 0 ) {
            li.classList.add('color2')
        }
    } 
    ul.appendChild(li)  
}

body.appendChild(ul);

var body = document.querySelector('body');
console.log(body);

var array = ['Sati', 'Luna', 'Leon', 'Morena', 'Zeca', 'Mishka', 'Dali', 'Bigotes', 'Manchita', 'Patitas'];

var ul = document.createElement('ul');
console.log(ul);
body.appendChild(ul);

for ( var i = 0; i < array.length; i++ ) {
    var li = document.createElement('li');
    li.textContent = array[i];
    ul.appendChild(li);
}


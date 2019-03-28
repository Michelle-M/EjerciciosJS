var cuerpo = document.querySelector('body')
console.log(cuerpo);

var arrayNombres = ['Sati', 'Luna', 'Leon', 'Morena', 'Zeca', 'Mishka', 'Botitas', 'Bigotes', 'Fluffy', 'Patitas']

array = document.createElement('div');
console.log(array)

var ul = document.createElement('ul');
console.log(ul)

for ( var i = 0; i < arrayNombres.length; i++ ) {
    var li = document.createElement('li')
    li.textContent = [i];
    
}
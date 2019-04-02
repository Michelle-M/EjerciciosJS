var ul = document.querySelector('ul');

for ( var i = 0; i < ul.children.length; i-- ) {
    ul.removeChild(ul.lastChild);
}
var ul = document.querySelector('ul');
var li = ul.children.item(6);

for ( var i = 0; i < ul.children.length; i-- ) {
    ul.removeChild(li);
}
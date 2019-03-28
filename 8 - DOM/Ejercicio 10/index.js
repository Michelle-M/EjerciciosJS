var ul = document.querySelector('p');

ul.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>';

var liHtml = ul.innerHTML;
console.log(liHtml)

var liCh = ul.children;
console.log(liCh);
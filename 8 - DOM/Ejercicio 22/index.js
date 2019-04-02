var html = document.querySelector('html');
var div = document.querySelector('div');

html.addEventListener('keypress', function(evento) {
    div.textContent = 'Codigo de letra: ' + evento.keyCode + ' Letra: ' + String.fromCharCode(evento.charCode);
});

div.classList.add('estilo-div');


var hipervinculo = document.querySelector('a');

hipervinculo.onmouseover = function() {
    console.log('Mouse sobre el hipervinculo')
};

hipervinculo.onmouseout = function() {
    console.log('Mouse salió del hipervinculo')
}
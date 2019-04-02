var hipervinculo = document.querySelector('a');

hipervinculo.addEventListener('click', function(evento) { 
    evento.preventDefault(); 
    alert('Este link no navega a ningún lado');
});
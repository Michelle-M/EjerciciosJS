//Codear dos objetos asignados a las variables Pikachu y Chamander
//Cada uno tiene tres propiedades nombre, vida y ataque
//Nombre es un string y vida y ataque son numeros

var pikachu = {
    nombre: 'Pikachu',
    vida: 100,
    ataque: 3,
    atacar: function() {
        //codigo aca
    }
}

var charmander = {
    nombre: 'Charmander',
    vida: 200,
    ataque: 8,
    atacar: function() {
        //codigo aca
    }
}

pikachu.atacar(); //charmander pierde 3 puntos
charmander.atacar(); //pikachu pierde 8 puntos


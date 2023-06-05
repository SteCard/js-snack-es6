"use strict";

const bikesArray = [

    {
        'name'   : 'Bianchi',
        'weight' : 12
    },

    {
        'name'   : 'Focus',
        'weight' : 13
    },

    {
        'name'   : 'Endurance',
        'weight' : 7
    },

    {
        'name'   : 'Orbea',
        'weight' : 14
    },

    {
        'name'   : 'Scott',
        'weight' : 9
    }
];

// VARIABILE PER L'OGGETTO CON PESO MINORE
let lighterBike = bikesArray [0];

// CICLO FOR EACH
bikesArray.forEach(({name, weight}) => {

    if (weight < lighterBike.weight){ // SE PESO OGGETTO ATTUALE < PESO ATTUALE OGGETTO CON PESO MINORE

        // DARE A lighterBike LE PROPRIETA' DELL'OGGETTO CON PESO MINORE
        lighterBike = {name, weight}
    }
});

console.log(`Bici da Corsa con il Peso Minore: ${lighterBike.name}, ${lighterBike.weight} Kg`);
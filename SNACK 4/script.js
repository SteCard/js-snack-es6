"use strict";

// FUNZIONE NUMERI RANDOM
function generateRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ARRAY SQUADRE DI CALCIO
const squadreArray = [

    {
        'nome'          : 'Napoli',
        'puntiFatti'    : generateRandomNumber(60, 90),
        'falliSubiti'   : generateRandomNumber(50, 100)
    },

    {
        'nome'          : 'Roma',
        'puntiFatti'    : generateRandomNumber(60, 90),
        'falliSubiti'   : generateRandomNumber(50, 100)
    },

    {
        'nome'          : 'Lazio',
        'puntiFatti'    : generateRandomNumber(60, 90),
        'falliSubiti'   : generateRandomNumber(50, 100)
    },

    {
        'nome'          : 'Atalanta',
        'puntiFatti'    : generateRandomNumber(60, 90),
        'falliSubiti'   : generateRandomNumber(50, 100)
    },

    {
        'nome'          : 'Milan',
        'puntiFatti'    : generateRandomNumber(60, 90),
        'falliSubiti'   : generateRandomNumber(50, 100)
    }
];

// STAMPO IN CONSOLE L'ARRAY
console.log(squadreArray);

// CICLO MAP PER ESTRAPOLARE LE PROPRIETA' ("NOME", "FALLI_SUBITI") E INSERIRLE IN UN NUOVO ARRAY
const newSquadreArray = squadreArray.map(({nome, falliSubiti}) => {

    return {nome, falliSubiti};
})

// STAMPO IN CONSOLE IL NUOVO ARRAY
console.log(newSquadreArray);
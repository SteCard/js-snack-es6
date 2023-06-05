"use strict";

const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin' ];

console.log(guests);

const invitation_array = guests.map((guest, i) => {
    return { 'Nome Tavolo': 'Tavolo Vip', 'Nome Ospite': guest, 'Posto Occupato': i}
});

console.log(invitation_array)
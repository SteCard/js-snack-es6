"use strict";

const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin' ];

console.log(guests);

const invitation_array = guests.map((guest, i) => {
    return { '_nome_del_tavolo_': 'Tavolo Vip', 'nome_dell_ospite_': guest, '_posto_occupato_': i}
});

console.log(invitation_array)
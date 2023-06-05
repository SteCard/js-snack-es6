"use strict";

const students = [
    {
        'id': '213',
        'name': 'Marco della Rovere',
        'grades': '78'
    },
    {
        'id': '110',
        'name': 'Paola Cortellessa',
        'grades': '96'
    },
    {
        'id': '250',
        'name': 'Andrea Mantegna',
        'grades': '48'
    },
    {
        'id': '145',
        'name': 'Gaia Borromini',
        'grades': '74'
    },
    {
        'id': '196',
        'name': 'Luigi Grimaldello',
        'grades': '68'
    },
    {
        'id': '102',
        'name': 'Piero della Francesca',
        'grades': '50'
    },
    {
        'id': '120',
        'name': 'Francesca da Polenta',
        'grades': '84'
    },
]

console.log(students);

// Restituisco ARRAY con i nomi trasformati in Maiuscolo
const plates = students.map((student) => student.name.toUpperCase());

console.log(plates);

// Restituisco ARRAY con studenti con voto > 70
const top_students = students.filter((student) => student.grades > 70);

console.log(top_students);

// Restituisco ARRAY con studenti con voto > 70 ed ID > 120
const top_id_students = students.filter((student) => student.grades > 70 && student.id > 120);

console.log(top_id_students);
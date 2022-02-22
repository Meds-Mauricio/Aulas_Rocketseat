const listaDeFrutas = [
    {
        id: 001,
        title: 'banana',
        price: 16.00,
        category: ['Nanica', 'Maça', 'Prata'],
    },
    {
        id: 002,
        title: 'Maça',
        price: 10.00,
        category: ['Fuji', 'Verde.', 'Gala'],
    },
    {
        id: 003,
        title: 'Manga',
        price: 3.50,
        category: ['Espada', 'Palmer', 'Tommy'],
    },
    {
        id: 004,
        title: 'Caqui',
        price: 4.50,
        category: ['Chocolate', 'Fuyu', 'ramaForte'],
    },
    {
        id: 005,
        title: 'Mamão',
        price: 7.50,
        category: ['Papaia', 'Formosa', 'Macho'],
    },
    {
        id: 006,
        title: 'Abacaxi',
        price: 6.00,
        category: ['Pérola', 'Ananás', 'havaí'],
    }
]

let total = 16.00 + 10.00 + 3.50 + 4.50 + 7.50 + 6.00;

console.log('R$ ' + total)
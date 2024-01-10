//foreach y map en arrow functions

const carrito = [
    {
        nombre: 'Monitor 27 pulgadas',
        precio: 2700
    },
    {
        nombre: 'Memoria Ram 32gb',
        precio: 1800
    },
    {
        nombre: 'No break APC',
        precio: 1600
    },
    {
        nombre: 'Tarjeta de Video rtx4070',
        precio: 12500
    },
    {
        nombre: 'Apple Mac Mini',
        precio: 31999
    },
    {
        nombre: 'Apple Ipad mini',
        precio: 9500
    }
]

//map devuelve un nuevo array
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`)

//foreach no, el resultado de console.log(nuevoArreglo2) es undefined
const nuevoArreglo2 = carrito.forEach( producto => {
    return `${producto.nombre} - Precio: ${producto.precio}`
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
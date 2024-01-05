//Foreach

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

//for
for(let x = 0; x < carrito.length; x++){
    console.log(`${carrito[x].nombre} - Precio: ${carrito[x].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})


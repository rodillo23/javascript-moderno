//For loop

for(let i = 0; i <= 10; i++){
    console.log(`Numero: ${i}`);
}

for(let x = 1; x <= 20; x++){
    if (x % 2 == 0) {
        console.log(`${x} es numero par`);
    }else{
        console.log(`${x} es numero impar`);
    }
}


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

for (let y = 0; y < carrito.length; y++) {
    console.log(carrito[y].nombre);
    
}




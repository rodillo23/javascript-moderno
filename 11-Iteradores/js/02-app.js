//Break y continue
//Break corta la ejecucion de un for
//Continue permite interceptar un elemento identificarlo y continuar la ejecucion

for(let i = 0; i <= 10; i++){
    if(i === 5){
        console.log('CINCO');
        continue;
        //break;
    }

    console.log(`Numero: ${i}`);
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
        precio: 31999,
        descuento: true
    },
    {
        nombre: 'Apple Ipad mini',
        precio: 9500
    }
]

//imprimir el articulo con descuento.
for (let x = 0; x < carrito.length; x++) {
    if(carrito[x].descuento){
        console.log(carrito[x]);
        break;
    }
    
}
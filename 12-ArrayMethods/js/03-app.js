//Reduce -> toma una cantidad de datos , los une y entrega un resultado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//saber cunato se pagara del carrito de compras

//foreach
let total = 0;
carrito.forEach( producto => total += producto.precio)
console.log(`Total a pagar ${total}`);

//reduce
let resultado = carrito.reduce( (total, producto) => {
    return total + producto.precio
}, 500) // -> valor inicial

console.log(resultado);

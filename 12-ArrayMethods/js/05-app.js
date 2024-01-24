//find `retorna un nuevo arreglo con el parametro evaluado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

//Encontrar Tablet en el array
//foreach
let resultado = {};

carrito.forEach( (producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
})
console.log(resultado);

//find ->  retorna el primer elemento que cumpla la condicion
let resultado2 = carrito.find( producto => producto.nombre === 'Tablet')
console.log(resultado2);
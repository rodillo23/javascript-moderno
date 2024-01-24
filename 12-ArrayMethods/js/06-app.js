//every true si todos los elemntos cumplen la condicion, 
//false si uno o mas no la cumplen

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

//true si todos cumplen la condicion
const resultado = carrito.every( producto => producto.precio < 500)
console.log(resultado);

//true si al menos uno la cumple
const resultado2 = carrito.some( producto => producto.precio < 500)
console.log(resultado2);
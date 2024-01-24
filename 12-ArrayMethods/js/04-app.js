// filter -> retorna un nuevo arreglo con el parametro evaluado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

//retornar los productos que cuestan mas de 400
let resultado = carrito.filter( producto => producto.precio > 400)

//retornar los productos que cuestan menos de 600
resultado = carrito.filter( producto => producto.precio < 600)

//obtener todos menos audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')
console.log(resultado);

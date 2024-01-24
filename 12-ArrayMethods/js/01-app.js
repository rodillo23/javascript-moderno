//.includes funciona con un array
// .some se utiliza en un arreglo de objetos y normal, true si al menos uno cumple la condicion

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor e3xiste en un arreglo
meses.forEach( mes => {
    if (mes === 'Enero') {
        console.log('Si existe Enero');
    }
})

const resultado = meses.includes('Mayo')
console.log(resultado);

const resultado2 = carrito.some( producto => producto.nombre === 'Telular')
console.log(resultado2);

const existe = meses.some( mes => mes === 'Marzo')
console.log(existe);
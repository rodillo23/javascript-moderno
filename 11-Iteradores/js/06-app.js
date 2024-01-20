//foreach y map

const pendientes = ['Tarea', 'Proyecto', 'Estudiar', 'Deporte'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} - ${pendiente}`);
})

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

//undefined ya que foreach no regresa un nuevo array
const carrito1  = carrito.forEach( producto => producto.nombre);

//map regresa un nuevo array
const carrito2  = carrito.map( producto => producto.nombre);

console.log(carrito1);
console.log(carrito2);
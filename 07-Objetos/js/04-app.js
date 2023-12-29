//Desestructuracion

const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

const {nombre, precio, disponible} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
//Problema con los objetos, al declarar un objeto como const, no podremos modificar el valor del objeto
//como tal, mas si podemos modificar sus propiedades.
const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

//producto = 'hola'; -> Error

producto.disponible = false;
delete producto.precio;

console.log(producto);
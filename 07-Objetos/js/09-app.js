//Sellar un objeto

"use strict";  //una vez habilitado tenemos una serie de metodos para objetos


const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

//A diferencia de freeze, con seal no se pueden agregar ni eliminar propiedades pero si modificar las existentes
Object.seal(producto)
console.log(Object.isSealed(producto));

producto.precio = '4500'

//NO PODEMOS AGREGAR NI ELIMINAR
//producto.imagen = 'Imagen.png';
//delete producto.precio;

console.log(producto);
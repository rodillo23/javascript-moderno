//congelar un objeto para que no se modifiquen las llaves

"use strict";  //una vez habilitado tenemos una serie de metodos para objetos


const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

Object.freeze(producto);

console.log(Object.isFrozen(producto));
console.log(Object.isExtensible(producto));

producto.imagen = 'Imagen.jpg';
producto.disponible = false;

console.log(producto);


//con el modo estricto el console.log(x) mostrara un error
/*x = 20;
console.log(x);*/

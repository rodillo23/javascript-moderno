//Agregar o Eliminar propiedades a un objeto

const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

producto.imagen = 'Imagen.png'

delete producto.disponible;

console.log(producto);

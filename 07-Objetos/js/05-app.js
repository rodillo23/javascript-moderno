//Objeto dentro de un objeto

const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '50cm'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}


console.log(producto);


console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);
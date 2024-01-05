//Agregar elementos al inicio o final de un arreglo

const carrito = [];

const producto = {
    nombre: 'Mac Mini',
    precio: 31999
};

const producto2 = {
    nombre: 'MacBook Pro',
    precio: 50000
};

const producto3 = {
    nombre: 'Ipad Mini',
    precio: 9000
}

//push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

//unshift agrega al inicio de un arreglo
carrito.unshift(producto3)

console.table(carrito)
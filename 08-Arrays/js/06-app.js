//Crear un nuevo array con spread operator

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

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado)
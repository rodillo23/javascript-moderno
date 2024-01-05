//Eliminar elementos con splice, pop, shift
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

const producto4 = {
    nombre: 'Iphone 13',
    precio: 24000
}

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto4, ...resultado];
resultado = [producto3, ...resultado];


console.table(resultado)

//Elimina al final
//resultado.pop()
//console.table(resultado)

//Elimina al inicio
//resultado.shift()
//console.table(resultado);

//Elimina dependiendo la posicion indicada y cuanto elementos a eliminar
resultado.splice(2,1)
resultado.splice(0,2)
console.table(resultado)
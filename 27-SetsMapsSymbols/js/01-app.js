//sets -> permite crear una lista de valores sin duplicados, 
//cuando maneja muchos datos es mas rapido que un objeto o un array.
//solo son valores.

const carrito = new Set();

carrito.add('camisa');
carrito.add('pantalon');
carrito.add('calcetines');
carrito.add('camisa'); //-> no se agrega por ser un valor duplicado



console.log(carrito.size);
//revisa si existe el valor
console.log(carrito.has('zapatos'));
//elimina un valor del set
carrito.delete('calcetines');
//eliminar todos los elementos del set
carrito.clear();

console.log(carrito);

//los sets son iterables

const meses = new Set();
meses.add('Enero');
meses.add('Febrero');
meses.add('Marzo');
meses.add('Abril');
meses.add('Mayo');
meses.add('Junio');
meses.add('Enero');
meses.add({
    mes: 'Julio',
    numero: '07'
})

meses.forEach( (mes, index, set) => {
    console.log(mes);
    //console.log(index);
    //console.log(set);
})

//del siguiente arreglo, eliminar los duplicados.
const numeros = [10,20,30,40,50,10,20];

const numerosSet = new Set(numeros)
console.log(numerosSet);

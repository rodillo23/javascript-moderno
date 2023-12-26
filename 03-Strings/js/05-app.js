//Reemplazar, cortar y extraer un caracter de un String
const producto = 'Monitor de 20 Pulgadas';
console.log(producto);

//reemplazar texto de una cadena
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//cortar una cadena de texto
console.log(producto.slice(0,10)); // -> Monitor de
console.log(producto.slice(10)); // -> 20 Pulgadas

//alternativa a slice
console.log(producto.substring(0, 10)); // -> Monitor de
console.log(producto.substring(4,0)); // -> Moni *Acomoda los indices y slice no

const nombre = 'Rodolfo Figueroa'
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));
console.log(nombre.charAt(8));


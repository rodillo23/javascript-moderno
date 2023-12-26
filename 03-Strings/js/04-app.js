//Eliminar espacios en blanco en una cadena de texto

const producto = '          Monitor de 20 Pulgadas    '

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());

//Eliminar al final
console.log(producto.trimEnd());

//encadenar metodos
console.log(producto.trimStart().trimEnd());

//Eliminar en ambos lados
console.log(producto.trim());

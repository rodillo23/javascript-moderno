//Obtener elementos de LocalStorage

const nombre = localStorage.getItem('name');
console.log(nombre);

const producto = localStorage.getItem('producto');
const productoObjeto = JSON.parse(producto);
console.log(productoObjeto);

const meses = JSON.parse(localStorage.getItem('meses'));
console.log(meses);
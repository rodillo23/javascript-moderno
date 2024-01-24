//.findIndex -> saber en que indice de nuestro arreglo se encuentra un elemento
//Retorna el indice solo del primer elemento que encuentra
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//encontrar el indice de Enero con foreach
meses.forEach( (mes, index) => {
    if (mes === 'Enero') {
        console.log(`${mes} fue encontrado en el indice ${index}`);
    }
})

//encontrar el indice de abril con findIndex
const resultado = meses.findIndex( mes => mes === 'Abril')
console.log(`Abril fue encontrado en el indice ${resultado}`);

//encontrar el indice en un array de objetos
const indiceAudifonos = carrito.findIndex( producto => producto.nombre === 'Audifonos')
console.log(`Audifonos fueron encontrados en el indice ${indiceAudifonos}`);

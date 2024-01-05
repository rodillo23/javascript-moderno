//Desestructuracion de Arreglos


//Deestructuracion de objetos
const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

const {nombre, precio, disponible} = producto;

console.log(nombre);


//Desestructuracion de Arreglos
const numeros = [10,20,30,40,50];

//uno guarda 10, la segunda posicion no se guarda, tres guarda 30 y cuarto guarda un arreglo con los ultimos dos valores
const [uno, , tres, ...cuarto] = numeros

console.log(uno);
console.log(cuarto);


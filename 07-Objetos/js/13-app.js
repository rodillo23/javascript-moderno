//Metodos keys, values y entries

const producto = {
    nombre: 'Monitor de 27 pulgadas',
    precio: 3500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
} 

console.table(Object.keys(producto));
console.table(Object.values(producto));
console.table(Object.entries(producto))

console.log(Object.keys({nombre: 'Rodo', apellido: 'Figueroa'}));
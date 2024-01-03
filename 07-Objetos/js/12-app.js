// Object Constructor


//Object Literal
const producto = {
    nombre: 'Monitor de 27 pulgadas',
    precio: 3500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
} 
console.log(producto);

//creacion de objeto mediante Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true
}

const producto2 = new Producto('Samsung Galaxy Tab', 6000);
console.log(producto2);

const producto3 = new Producto('Ipad mini', 9000)
console.log(producto3);
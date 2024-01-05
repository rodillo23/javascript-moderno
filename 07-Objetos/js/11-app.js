//Accede a valores de los objetos con this

const producto = {
    nombre: 'Monitor de 27 pulgadas',
    precio: 3500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
} 

const producto2 = {
    nombre: 'Apple Mac Book Pro',
    precio: 50000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo()
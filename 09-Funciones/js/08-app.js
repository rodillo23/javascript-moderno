//funciones con retorno de valor

function sumar(a, b){
    return a+b;
}

const resultado = sumar(150, 1236);
console.log(resultado);

//ejemplo 

let total = 0;

function agregarCarrito(precio){
    return total + precio;
}

function calcularImpuesto(total){
    return total * 1.16;
}

total = agregarCarrito(587)
total = agregarCarrito(57)
total = agregarCarrito(1519)
console.log(total);

console.log(`El total a pagar es ${Math.round(calcularImpuesto(total))}`);

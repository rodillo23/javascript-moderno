//Copiar dos objetos

const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true
}

const medidas = {
    peso: '1kg',
    memdida: 'imt'
}

//console.log(producto);
//console.log(medidas);

const resultado = Object.assign(producto, medidas);

const resultado2 = {...producto, ...medidas};


console.log(resultado);
console.log(resultado2);

//Desestructuracion de objetos anidados

const producto = {
    nombre: 'Monitor de 27 Pulgadas',
    precio: '3500',
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '50cm'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const {nombre, informacion,  informacion: {fabricacion, fabricacion: {pais}}} = producto

//console.log(nombre);
//console.log(informacion);
//console.log(fabricacion);
//console.log(pais);

const vehiculo = {
    agencia: 'Toyota',
    modelo: 'Yaris',
    año: 2024,
    detalles: {
        color: 'Blanco',
        puertas: 5,
    },
    caracteristicas: {
        motor: 2.4,
        transmision: 'Manual',
        velocidades: 6,
    }
}

//Extraer, agencia, modelo, color, transmision

const {agencia, modelo, detalles: {color}, caracteristicas: {transmision}} = vehiculo;

console.log(`Vehiculo en Venta! ${agencia} ${modelo}, color ${color}, transmision ${transmision}`);


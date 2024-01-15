// Operador || (Or)

const efectivo = 1500;
const credito = 4500;
const disponible = efectivo + credito;
const totalAPagar = 5999;

if (efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar) {
    console.log('Proceda a realizar su pago.');
}else{
    console.log('Fondos insuficientes. Actualice su forma de pago.');
}


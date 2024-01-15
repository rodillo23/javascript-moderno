//Switch case

const metodoDePago = 'efectivo';

switch(metodoDePago){
    
    case 'efectivo':
        pagar(metodoDePago);
        break;

    case 'tarjeta':
        console.log(`Pago con ${metodoDePago}`);
        break;

    case 'cheque':
        console.log(`Pago con ${metodoDePago}`);
        break;

    default:
        console.log(`Método de pago ${metodoDePago} no soportado!`);
}

function pagar(metodo){
    console.log(`Pago con ${metodo}!!`);
}
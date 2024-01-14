//Else if   

const dinero = 1449 ;
const totalAPagar = 1450;
const tarjeta = false;
const cheque = false;   

if (dinero >= totalAPagar) {
    console.log('Pago con efectivo!!');
}else if(tarjeta){
    console.log('Pago con tarjeta!');
}else if(cheque){
    console.log('Pago con cheque!');
}else{
    console.log('Fondos Insuficientes');
}
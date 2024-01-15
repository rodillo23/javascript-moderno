//Operador && (AND)

const usuario = true;
const metodoPago = true;

if(usuario && metodoPago){
    console.log('Puedes realizar tu pago.');
}else if(!usuario){
    console.log('Inicia sesión para proceder con tu pago!');
}else if(!metodoPago){
    console.log('Existe un problema con tu metodo de pago, actualizalo!');
}
//Comparador Estricto   

const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

if(puntaje != 1000){
    console.log('Es diferente...');
}

if (puntaje2 !== "1000") {
    console.log('Si es diferente..');
}else {
    console.log('No es diferente');
}
//for in -> itera sobre objetos

const automovil = {
    modelo: 'sportage',
    agencia: 'kia',
    year: 2024
}

/*for (const propiedad in automovil) {
    console.log(automovil[propiedad]);
}*/

for(let [llave, valor] of Object.entries(automovil)){
    console.log(llave);
}
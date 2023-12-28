//buenas practicas

const auth = true;

if (auth) {
    console.log('Puedes ver la data');
}else{
    console.log('No puedes ver la data');
}

console.log(auth ? 'Autenticado' : 'No Autenticado');
//Como se comunican las funciones

iniciarApp()

function iniciarApp(){
    console.log('Iniciando App');
    segundaFuncion()
}

function segundaFuncion(){
    console.log('Desde la segunda Funcion');
    usuarioAutenticado('Rodillo')
}

function usuarioAutenticado(usuario = 'Desconocido'){
    console.log('Autenticando usuario...');
    console.log(`Usuario ${usuario} autenticado exitosamente!`);
}
//Local storage solo puede almacenar strings
localStorage.setItem('name', 'Rodolfo');

//JSON.stringify convertimos un objeto a string para poderlo almacenar
const producto = {
    nombre: 'Laptop HP',
    precio: 9200,
    especificaciones: {
        procesador: 'Intl Core I7',
        discoDuro: '1tb',
        memoria: '16gb'
    }
};
localStorage.setItem('producto', JSON.stringify(producto));

//Tambien un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
localStorage.setItem('meses', JSON.stringify(meses));
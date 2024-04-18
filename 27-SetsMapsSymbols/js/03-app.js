//maps -> Listas ordenadas en llave y valor (un solo, en cualquier tipo de dato)
//los maps son diseñados para agregar, eliminar, recorrer, 
//Mejor performance que un objeto

const cliente = new Map();

cliente.set('Nombre', 'Rodolfo');
cliente.set('Tipo', 'Premium');
cliente.set('Saldo', 2900);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('Tipo')); //-> true Evalua por la llave

//obtener los valores
console.log(cliente.get('Nombre'));
console.log(cliente.get('Saldo'));

//eliminar una entrada
cliente.delete('Tipo');
console.log(cliente.has('Tipo')); //-> false
console.log(cliente.get('Tipo'));// -> undefined

//Limpia el map, borra todos los elementos
cliente.clear();
console.log(cliente);

//Inicializar un Map al crearlo 
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);
paciente.set('Dr.', 'Alberto Figueroa')
paciente.set('nombre', 'Alfonso Figueroa')
console.log(paciente);

//iterar un map
paciente.forEach( (datos, index) => {
    console.log(`${index} - ${datos}`);
})

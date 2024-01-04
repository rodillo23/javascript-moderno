//Recorrer un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

console.table(meses);

//cuanto mide el array
console.log(meses.length);

//mostrar los valores de un array 
for(let x = 0; x < meses.length; x++){
    console.log(meses[x]);
}
//.concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']

const resultado = meses.concat(meses2, meses3, 'Otro mes')

console.log(resultado);

const resultado2 = [...meses, ...meses2, ...'Otro mes']
console.log(resultado2);
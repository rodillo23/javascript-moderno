//Eliminar de local storage

localStorage.removeItem('name');

//Actualizr un elemento 

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Otro mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

//limpiar local storage
localStorage.clear();

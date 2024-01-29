//querySeletor -> Retorna el primer elemento que encuentre

const card = document.querySelector('.card');

console.log(card);

//Selectores especificos como en css

const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundio card de Hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//seleccionar formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);
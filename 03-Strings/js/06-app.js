//repeat, permite repetir una cadena de texto

const producto = 'Monitor de 20 Pulgadas';

const texto = 'En Oferta! '.repeat(2.6);
console.log(texto);

console.log(`${producto} ${texto}`);

//split, permite dividir un string

const actividad = 'Estoy aprendiendo Javascript Moderno'
console.log(actividad.split(' ')); // -> ['Estoy', 'aprendiendo', 'Javascript', 'Moderno']

const hobbies = 'Leer, correr, escuchar musica, jugar futbol, ver tv';
console.log(hobbies.split(',')); // -> ['Leer', ' correr', ' escuchar musica', ' jugar futbol', ' ver tv']

const tweet = 'Aprendiendo JS #JSModernoConJuan';
console.log(tweet.split('#')); // -> ['Aprendiendo JS ', 'JSModernoConJuan']

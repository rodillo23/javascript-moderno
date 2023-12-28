//operador igual que
const   numero1 = 20,
        numero2 = "20",
        numero3 = 30;


//igual

console.log(numero1 == numero3); //-> false
console.log(numero1 == numero2); //-> true 

console.log(numero1 === numero2); //-> false
console.log(numero1 === parseInt(numero2)); //-> true

console.log(typeof numero1);

//diferente
const pass1 = 'admin';
const pass2 = 'Admin';

console.log(pass1 != pass2);
console.log(numero1 !== numero2);


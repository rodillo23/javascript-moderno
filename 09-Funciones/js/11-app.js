//Parametros en la Arrow functions

const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('Javascript', 'NodeJs'));
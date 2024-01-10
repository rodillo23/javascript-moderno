//Diferencia entre function expression y 

//Declaracion de funcion

sumar()

function sumar(){
    console.log(4+4);
}


//Expresion de funcion
//la diferencia es que una expresion de funcion no se puede ejecutar antes de ser llamada (hoisting, 2 vueltas
//creacion y ejecucion, las variables solo las declara)

sumar2()
const sumar2 = function(){
    console.log(3+3);
}
//-> can't access lexical declaration 'sumar2' before initialization

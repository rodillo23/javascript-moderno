//class declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    };
};

const rodo = new Cliente('Rodolfo', 1500);
console.log(rodo);

//class expression
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    };
};

const samy = new Cliente2('Samantha', 10000);
console.log(samy);
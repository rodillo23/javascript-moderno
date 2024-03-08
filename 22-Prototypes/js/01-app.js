//Los prototypes estan relacionados con los objetos
//object literal

const cliente = {
    nombre: 'Rodolfo',
    saldo: 1000
};

console.log(cliente);

//object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo
}

const rodo = new Cliente('Rodolfo', 1200);
console.log(rodo);
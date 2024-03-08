//Con los prototypes se resuelve el problema de no saber que funciones son para cada prototype,
//ya que dentro del prototype se puede especificar que funcion le pertenece a cada uno.

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo
};

const rodo = new Cliente('Rodolfo', 1200);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;

    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(rodo));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

const empresa1 = new Empresa('Samsara', 15000, 'Desarrollo de Software');

console.log(formatearEmpresa(empresa1));
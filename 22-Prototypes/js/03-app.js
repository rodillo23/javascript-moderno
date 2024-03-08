function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo
};

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if (this.saldo > 5000) {
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    };
    return tipo;
};

Cliente.prototype.datosCliente = function(){
    return `Bienvenido ${this.nombre}, tu saldo es ${this.saldo} y tu categoria es ${this.tipoCliente()}`;
};

Cliente.prototype.retiro = function(cantidad){
    this.saldo -= cantidad;
};

const rodo = new Cliente('Rodolfo', 10000);
console.log(rodo.datosCliente());

rodo.retiro(5000);
console.log(rodo.datosCliente());

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

//Crear otro prototype y heredar de Cliente
function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
};

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

Persona.prototype.mostrarTelefono = function(){
    return `${this.nombre}, tu telefono es ${this.telefono}`;
}

const samy = new Persona('Samantha', 5200, 3414325600);
console.log(samy);
console.log(samy.datosCliente());
console.log(samy.mostrarTelefono(
    
));



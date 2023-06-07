/*
Laboratorio III
Clase 7
22/05/23
Abel Pierna
Clases parte 2
*/


class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }

}
class Emplado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescribir metodo
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this.departamento;
    }

}
let persona1 = new Persona('Abel','Pierna');
console.log(persona1);
console.log(persona1.nombreCompleto())
console.log(persona1.toString())
let empleado1 = new Emplado('Jeremias','Riquero', 'Desarrollo Web');
console.log(empleado1);
//llamamos al metodo heredado
console.log(empleado1.nombreCompleto())
//sobreescribir metodo toString
console.log(empleado1.toString()) //poliformismo




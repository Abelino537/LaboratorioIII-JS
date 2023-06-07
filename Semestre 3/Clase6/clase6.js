/*
Laboratorio III
Clase 6
15/05/23
Abel Pierna
Clases
*/

//Crear clases
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //metodos get and set
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

}

// herencia 
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
}
let persona1 = new Persona('Abel','Pierna');
console.log(persona1);
let empleado1 = new Emplado('Jeremias','Riquero', 'Desarrollo Web');
console.log(empleado1);

// el hosting no se puede aplicar a las clases 


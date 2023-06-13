/*
Laboratorio III
Clase 8
29/05/23
Abel Pierna
variables y metodos estaticos, atributos no estaticos,metodos estaticos constantes
*/
class Persona{
    //atributo estatico
    static contadorObjetos = 1;
    contadorNoEstatico = 5;
    //metodo constante estatico
    static get MAX_OBJ(){
        return 3
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.id = Persona.contadorObjetos;
        if (this.id <= Persona.MAX_OBJ) {
            this.id = Persona.contadorObjetos++;
        } else {
            this.id = undefined;
            console.log('llego al maximo de objetos')
        }
        
    }
    static metodoSaludar(persona){
        console.log(persona);
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
        return this.id +' '+ this.nombreCompleto();
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
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString()) 

// persona1.metodoSaludar(); -> solo podemos acceder a los metodos estaticos desde la clase y no desde los objetos
Persona.metodoSaludar();
//para acceder desde los objetos hacemos lo siguiente
Persona.metodoSaludar(persona1.nombre);
//tambien podes acceder a los objetos hijos
Persona.metodoSaludar(empleado1.nombre);
console.log(Persona.contadorObjetos);
//accedo a un atributo no estatico (solo se puede acceder desde los objetos y no desde la clase)
console.log(persona1.toString())
console.log(empleado1.toString())
let persona2 = new Persona('Lucas','Salinas');
console.log(persona2.toString())
let persona3 = new Persona('Lujan','Arroyo')
console.log(persona3.toString())



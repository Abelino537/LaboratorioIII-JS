/*
Laboratorio III
Clase 4
17/04/23
Abel Pierna
Objetos
*/ 

//CREAR UN OBJETO(manera actual)
let persona1 = {
    nombre: "Abel",
    apellido: "Pierna",
    edad: 20,
    //METODO
    nombrecompleto: function(){
        return console.log("El nombre de la persona1 es: " + this.nombre + " " + this.apellido);
    }
}
persona1.nombrecompleto();

//CREAR UN OBJETO CON NEW OBJETC(ya no se usa mucho)

let persona2 = new Object();
persona2.nombre = "Jeremias";
persona2.apellido = "Riquero";

//ACCEDER A LAS PROPIEDADES COMO UN ARREGLO

console.log(persona1['apellido']);

//UTILIZAMOS EL FOR IN 
for  (propiedad in persona1) {
    console.log(propiedad) //forma 1
    console.log(persona1[propiedad]) //forma 2
}

//MODIFICA UN ATRIBUTO
persona1.edad = 21;
console.log(persona1.edad)

//AGREGAR UN ATRIBUTO
persona1.dni = 44756770;
console.log(persona1.dni);

//ELIMINAR UN ATRIBUTO
delete persona1.edad;
console.log(persona1.edad);

//OTRAS FORMAS DE IMPRIMIR LOS DATOS 

//COMO UN ARRGLO 
let personaArray = Object.values(persona1);
console.log(personaArray);

//COMO JSON (esto transforma los datos en un string)
let personaString = JSON.stringify(persona1);
console.log(personaString);
 

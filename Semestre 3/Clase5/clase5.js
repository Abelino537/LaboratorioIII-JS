/*
Laboratorio III
Clase 2
08/05/23
Abel Pierna
Objetos Parte 2
*/ 

//GET Y SET
let persona1 = { //Creamos el objeto
    nombre: "Abel",
    apellido: "Pierna",
    edad: 20,
    idioma: 'EN',
    //Metodo get
    get lang(){
        return 'El dioma que habla es: '+ this.idioma.toUpperCase();
    },
    //Metodo set, Cambia los caracteres en minuscula por mayusculas usando el metodo toUpperCase()
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombrecompleto: function(){
        return console.log("El nombre de la persona1 es: " + this.nombre + " " + this.apellido);
    }
}
console.log(persona1.lang);

//CONTRUCTOR DE OBJETOS
function Persona2(nombre, apellido, edad){ //Este es el metodo contructor 
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //METODOS DENTRO DE UN CONTRUCTOR
    this.nombrecompleto2 = function(){
        return 'Nombre completo: ' + this.nombre + ' ' + this.apellido;
    };
}
let padre = new Persona2('Abel','Pierna',20); //Creamos el objeto y le ingresamos los parametros
let madre = new Persona2('Silvina', 'Abeiro', 20);//Creamos un segundo objeto con otros parametros pero con el mismo contructor
//AGREGAR UN ATRIBUTO UNICO A UNO DE LOS OBJETOS CREADO POR EL CONTRUCTOR
padre.dni = 44756770; 
//Usamos prototype para agregar un nuevo parametro al contructor
Persona2.prototype.telefono = '2604310602'; 
console.log(padre);
console.log(madre);
console.log(padre.telefono);
console.log(madre.telefono); //mostramos el parametro agregado con prototype
console.log(padre.nombrecompleto2());
console.log(madre.nombrecompleto2());

//DIFERENTES FORMAS DE CREAR OBJETOS

//caso Objetos 1 y 2
let miObjeto1 = new Object(); //Formal 
let miObjeto2 = {}; //Sintaxis resumida 
//caso String 1 y 2
let miCadena1 = new String('hola'); //Formal 
let miCadena2 = 'hola'; //Sintaxis resumida 
//caso Números 1 y 2
let miNumero1 = new Number(1); //Formal 
let miNumero2 = 1; //Sintaxis resumida 
//caso Booleano 1 y 2
let miBooleano1 = new Boolean(true); //Formal 
let miBooleano2 = true; //Sintaxis resumida 
//caso Arreglos 1 y 2
let miArreglo1 = new Array(); //Formal 
let miArreglo2 = []; //Sintaxis resumida 
//caso Function 1 y 2
let miFuncion1 = new function(){}; //Formal 
let miFuncion2 = function(){}; //Sintaxis resumida 

//USAMOS CALL PARA ACCEDER CON UN OBJETO AL METODO DE OTRO OBJETO

let persona3 = { //Creamos el objeto
    nombre: "Abel",
    apellido: "Pierna",
    edad: 20,
    nombrecompleto2: function(titulo){
        return  titulo +' '+ this.nombre + " " + this.apellido;
    }
}
console.log(persona3.nombrecompleto2('Tec.')); //llamamos al metodo
let persona4 = { //Creamos el segundo objeto
    nombre: 'Silvina',
    apellido: 'Abeiro'
}
console.log(persona3.nombrecompleto2.call(persona4, 'Doc.'))//llamamos al metodo del objeto persona3
//usamos appy que hace lo mismos solo que usando un arreglo
let persona5 = {
    nombre: 'Jeremias',
    apellido: 'Riquero'
}
let  arreglo = ['Lic.'];
console.log(persona3.nombrecompleto2.apply(persona5, arreglo))

/*
Laboratorio III
UTN
Clase 3
10/04/23
Abel Pierna
Funciones
*/

//INICIALIZAR UNA FUNCION

function miFuncion1 (a,b){ //declaramos la funcion y le damos los parametros
    //console.log('El resultado es: ' + (a + b));
    return a + b;
}//las funciones siempre necesitan un return pero si no lo ingresamos js lo agrega igual en la ultima linea

console.log(miFuncion1 (4 , 5)); //Llamamos a la funcion pasandole los argumentos
let resultado1 = ('El resultado es: ' + miFuncion1(10,3)); //tambien podemos agregar el resultado de una funcion a una variable 
console.log(resultado1);

//Funciones de tipo expresión

let variableExpresion = function (a , b){return a + b}; //se escribe todo en una linea y termina en ; 
let resultado2 = variableExpresion(20 , 5);
console.log("El resultado 2 es: " + resultado2);


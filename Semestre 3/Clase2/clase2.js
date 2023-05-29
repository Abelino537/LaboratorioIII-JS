//DECLARAR UN ARREGLO

let arregloViejo = new Array('Hola','Chao','Bye'); //Esta es la forma vieja que ya no se usa

const planetas = ['Jupiter','Neptuno','Marte']; //Nueva forma

//ACCEDER MANUALMENTE A LOS DATOS DE UN ARREGLO

console.log(planetas[1]); //Accedemos a los datos intruduciendo el valor del indice

//ITERAR UN ARREGLO CON CICLO FOR

for (let i = 0; i < planetas.length; i++) {
    console.log(i + ': ' + planetas[i]);
}

//MODIFICAR ELEMENTOS 

planetas[1] = 'Venus';

//AGREGAR ELEMENTOS

planetas.push('Neptuno'); //forma 1
planetas[planetas.length]='Urano';//forma 2
planetas[6]= 'Mercurio';//froma 3 (con esta forma hay que tener cuidado con saltearnos espacios, porque generamos memoria inecesaria dentro del arreglo)

//COMO  PREGUNTARLE A NUESTRA COSOLA SI ES UN ARREGLO 

console.log(Array.isArray(planetas)); //forma 1
console.log(planetas instanceof Array); //forma 2

//ITERO EL ARREGLO FINAL

for (let i = 0; i < planetas.length; i++) {
    console.log(i + '= ' + planetas[i]);
}

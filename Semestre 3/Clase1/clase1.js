/*
Laboratorio III
JS
Abel Pierna
03/04/23
Clase 1
Ciclos y palabras Break y continue
*/

//Ciclo While
let contador1 = 0;
while (contador1 < 3) { //mientras el contador sea menor a 3 no va a salir del ciclo
    console.log(contador1);
    contador1++; //suma 1 con cada vuelta del ciclo
}
console.log('El ciclo while a terminado'); 

//ciclo do While
let contador2 = 0;
do {
    console.log(contador2);
    contador2++;
} while (contador2 < 3);
console.log('El ciclo do while a terminado'); 

//ciclo For
for (let contador3 = 0; contador3 < 3; contador3++){
    console.log(contador3);
}
console.log('El ciclo for a terminado')

//Palabra reservada break 
for (let contador4 = 0; contador4 < 10; contador4++){
    if (contador4 % 2 == 0) {
        console.log(contador4);
        break; //detiene cualquier estructura o ciclo
    }
}
console.log('El ciclo se detubo despues de encontrar el primer número par')

//Palabra reservada continue
for (let contador4 = 0; contador4 < 10; contador4++){
    if (contador4 % 2 != 0) {
        continue; //hace que el programa continue normalmente y no se detenga en este punto
    }
    console.log(contador4)
}
console.log('El ciclo a finalizado despues de encontrar todos los numeros pares')

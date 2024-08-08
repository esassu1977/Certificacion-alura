
//Sección de variables
let numeroSecreto = 7
let numeroUsuario = prompt("Ingresa un número entre 1 y 10 por favor: ")

console.log(numeroUsuario)

//Programa principal, se hace la comparación entre el número que ingresa el usuario y el designado
//en el programa

//El usuario acierta el número
if(numeroUsuario == numeroSecreto){
    //alert(`Acertaste, el número correctos es: ${numeroSecreto}`)
    alert('Número ingresado:' + numeroUsuario + ' Número secreto: ' + numeroSecreto)
}
//El usuario no acierta el número
else
alert('Lo siento, número incorrecto')

/*
//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}
*/
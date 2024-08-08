/* Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/

function numDoble(numero){
    return numero * 2;
}

let numUsuario = parseInt(prompt('Ingresa un número: '));

resultado = numDoble(numUsuario);

alert(`El doble de ${numUsuario}, es: ${resultado}`);
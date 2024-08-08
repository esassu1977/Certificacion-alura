/* Crear una función que reciba un número como parámetro y devuelva el resultado de 
multiplicar ese número por sí mismo.*/

function multiplicaPorSiMismo(numero){
    return numero *= numero;
}

let numUsuario = parseInt(prompt('Ingresa un número: '));

let resultado = multiplicaPorSiMismo(numUsuario);

alert(`El resultado de multiplicar ${numUsuario} por si mismo es: ${resultado}`);
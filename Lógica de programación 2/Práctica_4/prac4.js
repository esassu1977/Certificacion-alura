/* Crear una función que reciba tres números como parámetros y devuelva su promedio.*/

function calculaPromedio(num1, num2, num3){
    return(promedio = (num1 + num2 + num3)/3);

}

let numUsuario1 = parseFloat(prompt('Ingresa el primer número: '));
let numUsuario2 = parseFloat(prompt('Ingresa el segundo número: '));
let numUsuario3 = parseFloat(prompt('Ingresa el tercer número: '));

let resultadoPromedio = calculaPromedio(numUsuario1, numUsuario2, numUsuario3);

alert(`El promedio de los tres números es: ${resultadoPromedio}`);
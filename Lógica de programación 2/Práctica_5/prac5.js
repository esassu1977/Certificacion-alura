/* Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/

function numeroMayor(numero1, numero2){
    if(numero1 > numero2){
        return `El número mayor es: ${numero1}`;
    }
    else if(numero2 > numero1){
        return `El número mayor es: ${numero2}`;
    }
    else
        return 'Los números ingresados son iguales';
}

let numUsuario1 = parseInt(prompt('Ingresa el primer número: '));
let numUsuario2 = parseInt(prompt('Ingresa el segundo número: '));

let resultadoNumeroMayor = numeroMayor(numUsuario1, numUsuario2);

alert(resultadoNumeroMayor);


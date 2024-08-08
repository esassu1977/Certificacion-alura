/* Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function calculaFactorial(factor){
    //Retorna el factorial de 1 = 1
    if (factor == 1){
        return factor;
    }
    else{
        return factor *= calculaFactorial(factor - 1);
    }
    
}

let factorUsuario = parseInt(prompt('Ingresa un número para calcular su factorial'));

let factorial = calculaFactorial(factorUsuario);

alert(`El factorial de ${factorUsuario} es: ${factorial}`);
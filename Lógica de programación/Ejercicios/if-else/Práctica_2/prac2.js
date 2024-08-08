/* Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/ 
let ingresaNumero = prompt('Ingresa un numero por favor: ');

console.log('Número ingresado', ingresaNumero);

if(ingresaNumero > 0){
    alert('El número ingresado es positivo');
}

else if(ingresaNumero == 0){
    alert('Ingresaste el valor de ' + ingresaNumero + ' debes ingresar un valor menor o mayor a este');
}

else{
    alert('El número ingresado es negativo')

}
/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, 
negativo o cero utilizando un if-else y muestra el mensaje correspondiente. */

let numero = parseInt(prompt('Ingresa un número entero: '));

//Verifica si el número es mayor a cero
if(numero > 0){
   alert(`El número que ingresaste es: ${numero} y es positivo`); 
}

//Verifica si el número es menor a cero
if (numero < 0) {
    alert(`El número que ingresaste es: ${numero} y es negativo`);
    
} else {
    alert(`El número que ingresaste es: ${numero} `);    
}
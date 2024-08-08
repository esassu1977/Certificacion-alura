/* Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en 
la consola.*/

function saluda(nombre){
    alert(`Hola, ${nombre}`);
}

let nombreUsuario = prompt('Ingesa tu nombre: ');

saluda(nombreUsuario);
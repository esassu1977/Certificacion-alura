/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.*/

let contador = 0;

let numUsuario = prompt('Ingresa un número para iniciar el conteo: ')

while(contador <= numUsuario){
    alert(`La cuenta es: ${contador}`);
    contador++;
}
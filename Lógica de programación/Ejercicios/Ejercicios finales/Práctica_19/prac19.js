/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar 
si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola. */

let nota = parseInt(prompt('Ingresa tu calilficación: '));

//La nota es igual o mayor a 7
if (nota >= 7) {
    console.log('Tu calificación es: ', nota, ', estás aprobado');

//La nota es menor a 7
} else {
    console.log('Tu calificación es: ', nota, ', estás reprobado');
}
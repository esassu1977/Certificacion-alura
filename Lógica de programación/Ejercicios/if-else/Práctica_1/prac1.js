/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
 muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/

 
 let dia = prompt('Escribe por favor qué día de la semana es: ');

 if((dia == 'Sábado') || (dia == 'sábado') || ((dia == 'Domingo') || (dia == 'domingo'))){
    alert('¡Buen fin de semana!');
 }

 else{
    alert('¡Buena semana!')
 }
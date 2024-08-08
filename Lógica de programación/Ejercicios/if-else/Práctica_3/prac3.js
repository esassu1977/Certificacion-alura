/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.".*/

let puntajeJuego = prompt('Ingresa el puntaje del jugador: ');

if(puntajeJuego >= 100){
    alert(`¡Felicidades, has ganado! Obtuviste ${puntajeJuego}` );
}

else{
    alert(`Solo obtuviste ${puntajeJuego}, inténtalo nuevamente para ganar`)
}


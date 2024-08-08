/* Reto final del curso lógica de programación
   El programa consiste en que el usuario debe ingresar el número máximo hasta donde se va a 
   generar un número aleatorio. También debe ingresar el número que piense, es el número secreto
   en máximo tres intentos*/

let numSecreto = 0;
let intentos = 1;
let maxIntentos = 3;

let limSuperior = parseInt(prompt('¡Bienvenido! Para iniciar el juego "Adivina el número secreto", ingresa primero el número máximo que se puede adivinar: '));
console.log('Límite máximo ingresado: ', limSuperior);

numSecreto = Math.floor((Math.random()*limSuperior) + 1);
console.log('Número secreto generado: ', numSecreto);



while(intentos <= maxIntentos){    
    
    //Pide al usuario que ingrese un número
    let numUsuario = parseInt(prompt('¡Adivina el número e ingrésalo! '));
    console.log('Número ingresado por el usuario: ', numUsuario);

    //Si el usuario acierta a la primera, se manda este mensaje
    if(intentos == 1 && numUsuario == numSecreto){
        alert(`Felicidades, acertaste al primer intento`);
        break;
    }

    //Si se acierta en más de un intento se muestra este mensaje
    else if(intentos > 1 && numUsuario == numSecreto){
        alert(`Felicidades, acertaste en ${intentos} intentos`);
        break;
    }

    //Cuando no se acierta, se muestra este mensaje con el restante de intentos
    else if(numUsuario != numSecreto && intentos < 3){
        if(numUsuario > numSecreto){
            alert(`Fallaste, el número secreto es menor al que ingresaste. Te restan ${maxIntentos - intentos} intentos`);
        }
        else{
            alert(`Fallaste, el número secreto es mayor al que ingresaste. Te restan ${maxIntentos - intentos} intentos`);
        }
        
    }

    //Cuando se acaban los intentos, se muestra este mensaje
    if(intentos == 3){
        alert('¡Se acabaron tus oportunidades, mejor suerte a la próxima!');
    }

    intentos++;
    console.log('valor intentos', intentos, 'intentos restantes', maxIntentos-intentos);
}
/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza 
un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado
 en la consola. */

 let edadUsuario = parseInt(prompt('Ingresa tu edad: '));

 //Verifica si tiene 18 años o más
 if(edadUsuario >= 18){
    console.log('Tu edad es de', edadUsuario, 'años, por lo tanto eres mayor de edad');
 }

 else{
    console.log('Tu edad es de', edadUsuario, 'años, por lo tanto eres menor de edad');
 }
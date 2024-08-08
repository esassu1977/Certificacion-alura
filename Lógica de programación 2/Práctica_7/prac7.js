/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
altura en metros y peso en kilogramos, que se recibirán como parámetros. */

function calculaIMC(altura, peso){
    let IMC = parseFloat(peso/Math.pow(altura, 2));
    return IMC;
}

//Pide datos de altura en metros y peso en kilogramos
let alturaUsuario = parseFloat(prompt('Ingresa la altura en metros del usario: '));
let pesoUsuario = parseFloat(prompt('Ingresa el peso en kilogramos: '));

//Manda llamar a calculaIMC() para calcular el IMC
let IMCusuario = calculaIMC(alturaUsuario, pesoUsuario);

//Paciente diagnosticado con desnutrición severa
if (IMCusuario < 16){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente padece desnutrición severa`);    
}

//Paciente diagnosticado con desnutrición moderada
else if(IMCusuario >= 16.1 && IMCusuario <= 18.4){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente padece desnutrición moderada`);
}

//Paciente diagnosticado con bajo peso
else if(IMCusuario >= 18.5 && IMCusuario <= 22){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente padece bajo peso`);
}

//Paciente diagnosticado con peso normal
else if(IMCusuario >= 22.1 && IMCusuario <= 24.9){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente tiene peso normal`);
}

//Paciente diagnosticado con sobrepeso
else if(IMCusuario >= 25 && IMCusuario <= 29.9){
    alert(`El IMC es de ${IMCusuario.toFixed(2)},el paciente padece sobrepeso`);
}

//Paciente diagnosticado con desnutrición obesidad tipo 1
else if(IMCusuario >= 30 && IMCusuario <= 34.9){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente padece obesidad tipo 1`);
}

//Paciente diagnosticado con desnutrición obesidad tipo 2
else if(IMCusuario >= 35 && IMCusuario <= 39.9){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente padece obesidad tipo 2`);
}

//Paciente diagnosticado con desnutrición obesidad tipo 3
else if(IMCusuario > 40){
    alert(`El IMC es de ${IMCusuario.toFixed(2)}, el paciente padece obesidad tipo 3`);
}
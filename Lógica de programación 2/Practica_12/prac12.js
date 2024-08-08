/* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como 
parámetro.*/

function tablaDeMultiplicar(mulplicando){
    for(let i = 1; i <=10; i ++){
        alert(`${mulplicando} x ${i} = ${mulplicando * i}`);
    }
}

let numeroTabla = parseInt(prompt('Ingresa un número entero, para calcular su tabla de multiplicar: '));

tablaDeMultiplicar(numeroTabla);

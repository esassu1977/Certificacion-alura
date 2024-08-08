/* Crea una función que reciba una lista de números y devuelva una nueva lista con el 
cuadrado de cada número*/

function ListaAlCuadrado(lista){
    let numeroAlCuadrado = 0;
    let listaCuadrada = [];
    for(let i = 0; i < lista.length; i++){
        numeroAlCuadrado = Math.pow(parseInt(lista[i]),2);
        console.log(`numeroAlCuadrado: ${numeroAlCuadrado}`);
        listaCuadrada.push(numeroAlCuadrado);
        console.log(`ListaCuadrada: ${listaCuadrada}`)
    }
    console.log('lista original: ', lista);
    console.log('Lista al cuadrado: ', listaCuadrada);
    alert('El cuadrado de la lista ' + lista + ' es: ' + listaCuadrada);
}

let listaUsuario = [];
let elemento = 0;
let cantidadElementos = parseInt(prompt('Asigne la cantidad de elementos para la lista:'));

for(let i = 0; i < cantidadElementos; i++){
    elemento = parseInt(prompt(`Ingrese el elemento ${i+1} de la lista`));
    listaUsuario.push(elemento);
}

ListaAlCuadrado(listaUsuario);

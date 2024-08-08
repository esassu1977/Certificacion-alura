/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva 
lista con la suma de los elementos uno a uno.*/

function sumaDosListas(lista1, lista2){
    let suma = 0;
    let listaSuma = [];
    //Suma los elementos de lista1 y lista2 para asignarlo a listaSuma
    if(lista1.length == lista2.length){
        for(let i = 0; i < lista1.length; i++){
            suma = parseInt(lista1[i] + lista2[i]);
            listaSuma.push(suma);
        }                
    }
    else
     {return('Las listas no son del mismo tamaño');}
    alert(`La suma de las listas es: ${listaSuma}`);
}

//Con esta función se capturan uno a uno los elementos de la lista que se pase por parámetro
function asignaValores(indexElemento, numLista){
    let elemento = parseInt(prompt(`Ingresa el elemento ${indexElemento + 1} de la lista ${numLista}`));
    return elemento;
}

let listaUsuario1 = [];
let listaUsuario2 = [];
let elementoLista = 0;
const numLista1 = 1;
const numLista2 = 2;

let numElementos = parseInt(prompt('Ingrese la cantidad de elementos para cada lista: '));
console.log(`Cantidad elementos de cada lista: ${numElementos}`);

for(let i = 0; i < numElementos; i++){
    elementoLista = asignaValores(i, numLista1);    
    listaUsuario1.push(elementoLista);
}

for(let i = 0; i < numElementos; i++){
    elementoLista = asignaValores(i, numLista2);
    listaUsuario2.push(elementoLista);
}

sumaDosListas(listaUsuario1, listaUsuario2);
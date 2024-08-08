/* Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion.*/
function muestraLista(lista){
    alert(`Los elementos de la lista son: ${lista}`);
}

/* Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.*/
function muestraOrdenInverso(lista){    
    console.log(`La lista en orden inverso es ${lista.reverse()}`);
}

/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(`Lista con elementos iniciales: ${lenguajesProgramacion}`);

/* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 
'Ruby' y 'GoLang'.*/

lenguajesProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(`Lista con elementos agregados: ${lenguajesProgramacion}`);
muestraLista(lenguajesProgramacion);
muestraOrdenInverso(lenguajesProgramacion);
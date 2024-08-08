/* Crea una función que calcule el promedio de los elementos en una lista de números.*/
function calculaPromedio(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma += parseInt(lista[i]);
        console.log('valor acumulado de suma:',suma);
    }
    
    let promedio = parseInt(suma)/lista.length;
    alert(`El promedio de los elementos en la lista es: ${promedio}`);
}

/* Crea una función que muestre en la consola el número más grande y el número más pequeño
 en una lista.*/
 function calculaMaxMin(lista){
    let max = 0;
    let min = 1000;

    for(let i = 0; i < lista.length; i++){
        if(lista[i] > max){
            max = lista[i];
            console.log(`valor max: ${max}`);
        }

        if(lista[i] < min){
            min = lista[i];
            console.log(`valor min: ${min}`);
        }
    }

    alert(`El valor máximo en la lista es: ${max} y el valor mínimo es: ${min}`);
 }

 /* Crea una función que devuelva la suma de todos los elementos en una lista.*/
 function sumaLista(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma += parseInt(lista[i]);
        console.log('valor acumulado de suma:',suma);
    }    
    
    alert(`La suma de los elementos en la lista es: ${suma}`);
 }


let listaNumeros = [12, 23, 10, 15, 18, 20, 16, 11, 15, 18];

calculaPromedio(listaNumeros);
calculaMaxMin(listaNumeros);
sumaLista(listaNumeros);
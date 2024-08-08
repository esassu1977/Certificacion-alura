/* Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
        pasado como parámetro, o -1 si no existe en la lista.*/

function devuelvePosicion(lista, elemento){
    let inexistente = -1;
    for(let i = 0; i < lista.length; i++){
        if (elemento == lista[i]){
            return i;        
        } 
        else{
            continue;
        }       
    }
    return inexistente;
}



listaUsuario = ['Peras', 'Manzanas', 'Plátanos', 'Uvas', 'Fresas', 'Papayas'];


let elementoUsusario = prompt('Ingrese el item que desee de la lista, para visualizar su posición: ');

let indexElemento = devuelvePosicion(listaUsuario, elementoUsusario);

alert(`${(indexElemento == -1) ? 'El item ingresado no está en la lista' : `La posición del item en la lista es: ${indexElemento}`}`);

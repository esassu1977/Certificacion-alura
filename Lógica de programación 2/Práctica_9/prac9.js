/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el 
valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar
 en tu país). Para esto, considera la cotización del dólar igual a R$4,80. */

 function conversorDivisas(cantidadDolares){
    let cantidadReales = parseFloat(cantidadDolares * 4.8);
    return cantidadReales;
 }

 let dolaresUsuario = parseFloat(prompt('Ingresa la cantidad de dolares a convertir en reales: '));

 let realesUsuario = conversorDivisas(dolaresUsuario);

 alert(`$${dolaresUsuario} dolares, equivalen a $${realesUsuario} reales`);
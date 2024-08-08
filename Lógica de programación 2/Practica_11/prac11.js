/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14. */

function calculaAreaPerimetro(radio){
    
    let perimetro = parseFloat(2 * Math.PI * radio);
    let area = parseFloat(Math.PI * Math.pow(radio,2));

    alert(`El área del círculo es de ${area.toFixed(2)} unidades cuadradas y el perímetro vale ${perimetro.toFixed(2)} unidades lineales`);
}

let datoRadio = parseFloat(prompt('Ingresa el radio de la circunferencia: '));

calculaAreaPerimetro(datoRadio);
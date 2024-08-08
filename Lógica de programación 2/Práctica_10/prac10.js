/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros. */

function calculaAreaPerimetro(altura, anchura){
    let area = parseFloat(altura * anchura);
    let perimetro = parseFloat(2*(altura + anchura));
    alert(`El perímetro de la sala es ${perimetro.toFixed(2)} unidades lineales el área es de ${area.toFixed(2)} unidades cuadradas`);

}

let datoAltura = parseFloat(prompt('Ingresa la altura de la sala: '));
let datoPerimetro = parseFloat(prompt('Ingresa la altura del perímetro: '));

calculaAreaPerimetro(datoAltura, datoPerimetro);

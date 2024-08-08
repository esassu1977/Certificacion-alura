/* Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template 
string para incluir el valor del saldo. */

let saldoCuenta = prompt('Ingresa el saldo de tu cuenta: ');
console.log('Saldo de la cuenta', saldoCuenta);

alert(`El saldo de la cuenta es: $${saldoCuenta}`)
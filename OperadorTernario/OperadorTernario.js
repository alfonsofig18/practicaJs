// Operadores ternarios son

const usuario = {
    boleto: `vip`,
    edad: 20,
}
// let codigoAcceso; // Se trabaja con let ya que esta puede cambiar su valor en cualquier momento.

// if (usuario.boleto == `vip`) {
//     codigoAcceso = `VIP-202-2289`;
// } else {
//     codigoAcceso = `REG-202-2289`;
// }

// Ejemplo. Tomando el código de arriba, se nota una condición, ahora se aplica el condicional ternario para hacer la misma operación. En este caso dentro de la misma variable.
const codigoAcceso = (usuario.boleto == `vip`) ? `VIP-202-2289` : `REG-202-2289`;
console.log(`Código de acceso es: ${codigoAcceso}`);

// Ejemplo #2 También se puede ejecutar código dentro de este condicional terciario
const codigoAcceso2 = (usuario.boleto == `vip`) ? console.log(`El código es de tipo: ${usuario.boleto}`) : console.log(`El código es de tipo: ${usuario.boleto}`);


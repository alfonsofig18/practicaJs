// Operadores lógicos
//     && And
//     || Or
//     ! Not

const nom = 'Carlos';
const edad = 12;
const tieneEntrada = true;
const TienePermiso = true;
let resul;

const acceso = edad >= 18 && tieneEntrada ? true : false; // Es como una condición que tendría lo sig.: Si es mayor de edad y tiene entrada, tomará la primera opción 'true', si no se cumplen ambas funciones tomará la segunda opción 'false'.

// En una condición se puede tomar la varible sin especificar el valor booleano, ya cuando se desea especificar el valor, ahí si hay que ponerle el valor; en este caso 'false'

if (acceso == true) {
    resul = 'Usted tiene acceso al evento';
}
else {
    resul = 'Usted no tiene acceso al evento';
}
console.log(resul);

//Ejemplo #2 - OR
const PermitirAcceso = (edad >= 18 && tieneEntrada) || (TienePermiso && tieneEntrada); //Aquí se observa la condición O. En este caso, si tiene mayoría de edad y tiene entrada entonces será True; o si tiene permiso para la entrada y tiene entrada entonces será true, si no la tiene, sera false.

console.log('Acceso permitido al concierto: ' + PermitirAcceso);

//Ejemplo #3 - ! (Invertido)
const variable = true;
console.log(!variable)
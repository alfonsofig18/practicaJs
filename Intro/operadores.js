//Operadores

//Aritméticos
const resultado = 10 + 10;
const resultado2 = 10 - 10;

let numero = 51;
let aumentar = numero++ ; //Se utiliza para aumentar de uno en uno
let disminuir = numero-- ; //Se utiliza para disminuir de uno en uno

console.log(aumentar);
console.log(disminuir);

//De asignación
// += suma un número al valor de una variable.  
// -= Resta un número al valor de una variable.
// *= Multiplica un número al valor de una variable.
// /= Divide un número al valor de una variable.
// %= Obtiene el sobrante de una división y lo asigna a la variable.


let num = 10, num1 = 10, num2 = 10, num3 = 10;
// num = num + 5; (Forma larga y antigua)
num += 5;
num1 -= 5;
num2 *= 5;
num3 /= 5;

console.log('sumando (+5)' + num);
console.log('Restando (-5)' + num1);
console.log('multiplicando (*5)'+ num2);
console.log('Dividiendo (/5)'+ num3);


// De comparación:
// == igual que
// === igual en valor y tipo de valor
// != Diferente
// !== Diferente en valor y diferente en tipo
// > Mayor que
// < Menor que
// >= Mayor o igual que
// <= Menor o igual que
// ? Operador ternario

// const resultado1 = 5 > 1; //True
// const resultado1 = 20 <= 20; //True
// const resultado1 = 10 == 10; //True (Se compara solo el valor, mas no el tipo de dato)
// const resultado1 = 10 === '10'; //False (Se comprara el valor y el tipo de valor)
let comparativa = 5;
const resultado1 = 10 > comparativa ? '10 si es mayor que ' + comparativa : '10 no es mayor que ' + comparativa; //Comparativa o ternario (?); si la condición es verdadera entonces tomara el primer valor, si no es verdadera, entonces tomará el valor despues del (;)

console.log(resultado1); 








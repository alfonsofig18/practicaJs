// 🏆 Parámetros. Los parámetros permiten pasar información a la función para que la funcioón luego pueda hacer operaciones con esa información.
/*
    ✔ Parámetro: Los valores especificados dentro de la función.
    ✔ Argumento: Los valores qeue pasamos a la función cuando la invocamos.
*/

// ✔✔ Se define la función.
const saludo = (nombre = `Como te llames`) => {
    console.log(`Hola ${nombre}`);
};

saludo('Alfonso'); // ✔✔ La función ejecutará cada vez el código con un valor diferente en el argumento. 
saludo('Cesar');
saludo('Juan Camilo');
saludo(); // ✔✔ Si el parámetro llegase a estar vacío, se define un valor base o valor por defecto en la función, especificamente en el parámetro.


// 📌 Multiples parámetros.
const operacion = (oper, num1, num2) => {
    if (oper == 'suma') {
        console.log(`La suma de ${num1} y ${num2} es= ${num1+num2}`);
    } 
    else if (oper == 'resta') {
        console.log(`La resta de ${num1} y ${num2} es= ${num1-num2}`);
    }
    else if (oper == 'mult') {
        console.log(`La multiplicación de ${num1} y ${num2} es= ${num1*num2}`);
    }
};

operacion(`suma`, 2, 5);
operacion(`resta`, 25, 55);
operacion(`mult`, 21, 15);
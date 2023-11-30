// 🏆 Función del return. Cómo funciona. 

const Operacion = (tipo, num1, num2) => {
    if (tipo == 'suma') {
        console.log(num1 + num2);
    }
    else if (tipo == 'rest') {
        console.log(num1 - num2);
    }
    else if (tipo == 'mult') {
        console.log(num1 * num2);
    }

    return 'Hola'; // ✔✔ Al retornar se guarda en una varible. El retornar siempre será guardado en el nombre de la función. Por lo que para utilizar el valor retornado se deberá llamar una variable que guarde el valor de la función.

}; // ✔✔ Las tareas de las funciones es que realicen solo una unica tarea, aquí la función está realizando muchas tareas.

const miVariable = Operacion(`suma`, 1, 5);
console.log(miVariable); // ✔✔ Aquí se imprime el valor que se guardó en la varible al momento de hacer el return.

//--------------------------------------------------------------------------------------------------------------------

// ✔✔ Ejemplo 2. Retornar los resultados dentro de la misma función.

const Operacion2 = (tipo = `suma`, num1, num2) => {

    let resultado; // ✔✔ Se crea la variable que almacenará el resultado.

    if (tipo == 'suma') {
        resultado = (num1 + num2); // ✔✔ Se almancena el resultado en la variable.
    }
    else if (tipo == 'rest') {
        resultado = (num1 - num2);
    }
    else if (tipo == 'mult') {
        resultado = (num1 * num2);
    }

    return resultado; // ✔✔ Se retornará el resultado una vez ya guardado.

}; 

const miVariable2 = Operacion2('mult', 1, 5);
const miVariable3 = Operacion2('suma', 1, 5);

console.log(miVariable2); 
console.log(miVariable3); 

//--------------------------------------------------------------------------------------------------------------------
// En ciertas ocaciones (mayorias), tambien se puede devolver el resultado sin guardar en una variable.

const Operacion3 = (tipo, num1, num2) => {

    if (tipo == 'suma') {
        return (`El resultado es ${num1 + num2}`); // ✔✔ Se devuelve automáticamente el resultado en la variable.
    }
    else if (tipo == 'rest') {
        return (`El resultado es ${num1 - num2}`);;
    }
    else if (tipo == 'mult') {
        return (`El resultado es ${num1 * num2}`);
    }

}; 

const miVariable4 = Operacion3('mult', 5, 5); // ✔✔ se guarda el resultado del return en la variable establecida.

console.log(miVariable4); // Se muestra el resultado del return.

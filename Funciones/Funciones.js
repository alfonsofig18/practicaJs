// Funciones

// 📌 Forma 1
function saludo(){ // ✔✔ Se define 'saludo' como el nombre de la función. Siempre se colocan paréntesis 
    console.log(`Hola!`)
}

saludo(); // ✔✔Para llamar a ejecutar la función, siempre se hace de esta manera. Y es muy importante colocar el paréntesis; si no se coloca este paréntesis, es como si se estuviera haciendo una referencia a la función. Un ejemplo podría ser guardar la función en una variable
const funcion = saludo; 

// 📌 Forma 2 ~ Asignando una función a una variable.
const saludo2 = function() {
    console.log(`Hola2`);
};
saludo2(); // ✔✔ Se invoca de la manera en que lleva el nombre de la variable, y se le colocarán los paréntesis haciendo referencia a la función que lleva dentro de la variable.

// 📌 Forma 3 ~ Función de tipo flecha.
const saludo3 = () => {console.log(`Hola3`)};
// const saludo3 = () => console.log(`Hola2`); // ✔✔ cuando la función lleva una sola línea de código, se pueden eliminar las {} y ; que separan las sentencias de código.
saludo3();
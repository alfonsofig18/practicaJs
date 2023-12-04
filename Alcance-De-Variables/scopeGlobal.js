/*📌 Global Scope o variables globales
    - Son las variables declaradas fuera de una función (fuera de cualquier bloque de código).
    - Se puede acceder a ellas desde cualquier parte del código.
    - Se puede usar const let y var.
*/

var nombre = `carlos`;
console.log(nombre);

const saludo = () => {
    console.log(`Hola, ${nombre}`);
    nombre = `Frank`;
    console.log(`Hola, ahora eres: ${nombre}`); 
}

saludo();
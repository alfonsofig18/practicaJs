/*📌 Local Scope o variables Locales
    - Son las variables declaradas dentro de una función.
    - Solo se puede acceder a ellas desde dentro de la función.
*/

var numero = 1;

var numeroDeLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero);
        // Tomará la variable más cercana de la creación de la función. En este caso tomará la variable de la función: numeroDeLetras();
    };

    funcionAnidada();
};

numeroDeLetras('Jose');
console.log(numero); // ✔✔ No funcionará, ya que la variable está definida dentro de una función. Por lo cual, no es global

// 📍📍 NOTA. Dentro de una función, cuando se llama a una variable, ésta buscará dentro de su mismo "código" la variable. De no encontrar la definción de la variable, entonces tomará la variable que se haya definido fuera de la función. 
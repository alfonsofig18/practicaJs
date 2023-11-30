const persona = ['Carlos', 17, 'correo@gmail.com', true, true] // En los arreglos no se sabe cual es cada elemento o qué es cada elemento. Con los aarreglos se puede guardar un montón de informanción, más no poder organizarla o plenamente identíficarla.

// Con los objetos si se puede organizar

const personaObj = {
    nombre: 'Carlos', // Se conoce como propiedades clave : valor. En realidad no son más que variables que se encuentran dentro del objeto
    edad: 17,
    correo: 'correo@gmail.com',
    suscripciones: {
        web: true,
        correo: true
    }, // Se pueden agregar cualquier tipo de valor permitido en Js, por lo cual, podemos agregar otro objeto
    coloresFav: ['Rojo', 'Negro', 'Verde'],
    saludo: function() {
        alert('Hola');
    } // Las funciones dentro de objetos se les conoce como métodos.
};

// Formas de mostrar valores de los objetos o mismo objeto

// console.log(personaObj.suscripciones);
// console.log(personaObj['nombre']); // Segunda forma. 

// Forma dinámica de acceder a los datos.
const correo = 'correo';
// console.log(personaObj[correo]); 
// console.log(personaObj.suscripciones.web); // Acceder a un elemento de un objeto dentro de otro objeto. 

personaObj.pais = 'Mexico';
personaObj.pais = 'España';
personaObj.saludo();  // Acceder a un método dentro del objeto 
const arreglo = ['Texto', 456.12, true, {propiedad: 'Valor'}, [1, 2, 3]] //Los arreglos se definen con Brackets. Las llaves son objetos.
console.log(arreglo);

const amigos = ['Alejando', 'Manuel', 'Carlos'];
console.log(amigos[2]);

//Agregar elementos a un arreglo
const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Blanco'; //Volar un espacio
colores[3] = 'Amarillo'; //Sobreescribir

colores.push('Azul') //Al arreglo, le vamos a empujar o agregar al final el color 'Azul'. Siempre se le agreagará al final del arreglo los elementos que se coloquen con Push

console.log('El arreglo tiene: ' + colores.length +' Colores');
console.log(colores);

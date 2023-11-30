//Cadena de texto
const nombre = 'Carlos';
const parrafo = 'Es un párrafo';

//Número
const num1 = 4;
const num2 =  -4.254;

//Booleano
const usuarioConectado = true;
const mayorQue= 1 > 2; //devuelve true o false
console.log(mayorQue)

//Arrays
const arreglo = [1, 'número', true, {propiedad: 'valor'}, [1 ,23]];
console.log(arreglo);

//Objetos
//Guarda información en parejas, como clave y valor.
//El problema con los arreglos es que no se sabe que significa cada valor, es decir, no tiene ese nombre propiedad que identifica un valor de los demas 
const persona = {
    nombre: 'Carlos',
    edad: 27,
    carro: {
        marca: 'Mazda',
        color: 'Verde'
    },
};

console.log(persona.carro.marca);

//null
//Cuando quieres reiniciar una variable y no sabes que tipo de dato va o que tipo de dato poner, esta se esatblece en 'null'

//Funciones
function hola() {
    console.log('Hola')
}

hola();
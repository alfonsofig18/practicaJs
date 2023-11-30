// Condicionales

// Ejemplo #1

// const usuario = {
//     nombre: 'Carlos',
//     Apellido: 'Medina',
//     edad: 19,
//     ticket: true,
// }

// if (usuario.edad > 17) {
//     console.log(`El usuario tiene ${usuario.edad} años tiene acceso al concierto`)
// }
// else {
//     console.log(`El usuario tiene ${usuario.edad} años no tiene acceso al concierto`)
// }

// Ejemplo #2

const usuario = {
    nombre: 'Carlos',
    Apellido: 'Medina',
    edad: 12,
    ticket: false,
}

if (usuario.edad > 17 && usuario.ticket) {

    console.log(`El usuario tiene ${usuario.edad} años y tiene ticket, tiene acceso al concierto`);

} else if (usuario.edad > 17 && !usuario.ticket) {

    console.log(`El usuario tiene ${usuario.edad} años y no tiene ticket, no tiene acceso al concierto`);

} else if (usuario.edad < 17 && usuario.ticket) {

    console.log(`El usuario tiene ${usuario.edad} años (menor de edad) y tiene ticket, no tiene acceso al concierto`);

} else if (usuario.edad < 17 && !usuario.ticket) {

    console.log(`El usuario tiene ${usuario.edad} años (menor de edad) y no tiene ticket, no tiene acceso al concierto`);

}

// Ejemplo #3
if (usuario.edad > 17) {
    if (usuario.ticket) {
        console.log(`El usuario tiene un ticked`)
    }
    else {
        console.log(`El usuario es mayor de edad, pero no tiene un ticked`)
    }
}
else {
    console.log(`El usuario es menor de edad`)
}
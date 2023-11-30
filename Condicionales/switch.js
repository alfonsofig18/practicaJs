
// Switch: Funcionalidad del condicional Switch.
// La diferencia entre el 'Else if' y el 'switch' radica en que el primero es un poco más flexible, es decir puede llevar operadores de comparación o utlizar el && o ||

const usuario = {
    nombre: `Carlos`,
    pais: `Colombia`,
}

switch (usuario.pais) {
    case `Mexico`:
        console.log(`El usuario es de ${usuario.pais}`);
        break;
    case `Colombia`:
        console.log(`El usuario es de ${usuario.pais}`);
        break;
    default:
        console.log(`El usuario es de otro país`);
}

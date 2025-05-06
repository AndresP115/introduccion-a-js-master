// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let nombreUsuario = prompt('¿Cuál es tu nombre?');

if (nombreUsuario === 'Andres') {
    console.log(`Hola tocayo! Yo también me llamo ${nombreUsuario}`);
} else if ( nombreUsuario === 'Daniel') {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi primo`);
} else {
    console.log(`Hola ${nombreUsuario}`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edadUsuario = Number(prompt('¿Cuál es tu edad?'));

if(edadUsuario === 29) {
    console.log('Tenemos la misma edad!');
} else if(edadUsuario > 29) {
    console.log('Eres mayor que yo!');
}else {
    console.log('Eres menor que yo!');
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let usuarioTieneDocumento = prompt('¿Tienes documento?' || '').toLowerCase();
console.log(usuarioTieneDocumento)

if(usuarioTieneDocumento === 'si') {
    let edadUsuario = Number(prompt('¿Cuántos años tienes?'));
    if(edadUsuario >= 18){
        console.log(`Tienes ${edadUsuario} años, eres mayor de edad, puedes entrar al bar.`);
    } else {
        console.log(`Tienes ${edadUsuario} años, eres menor de edad, no puedes entrar al bar.`);
    }
} else if (usuarioTieneDocumento === 'no') {
    console.log('No tienes documento, no puedes entrar al bar.');
} else {
    console.log('No entendí tu respuesta');
}



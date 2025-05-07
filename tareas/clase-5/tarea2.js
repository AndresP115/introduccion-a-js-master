//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

const botonIngresoDatos = document.querySelector('#ingresar');

botonIngresoDatos.onclick = function () {
    const nombreDeUsuario = document.querySelector('#nombre-usuario').value;
    const apellidoDeUsuario = document.querySelector('#apellido-usuario').value;
    const edadDeUsuario = Number(document.querySelector('#edad-usuario').value);

    document.querySelector('#saludo').innerText = `Bienvenido, ${nombreDeUsuario}`;

    document.querySelector('#informacion-junta').innerText = `Tu nombre es: ${nombreDeUsuario} \nTu apellido es: ${apellidoDeUsuario} \nTu edad es: ${edadDeUsuario}`;


    
}










// document.querySelector('#calcular-salario-mensual').onclick = function(){
//     const salarioAnual = Number(document.querySelector('#salario-anual').value);
//     const salarioMensual = calcularSalarioMensual(salarioAnual);

//     document.querySelector('#salario-mensual').value = salarioMensual;

//     return false;
// }

// function calcularSalarioMensual(salarioAnual){
//     return salarioAnual / 12;
// }

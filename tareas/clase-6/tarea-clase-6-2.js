/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el 
salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, 
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const añadirLabels = document.querySelector('#agregar');
const contenedor = document.querySelector('#campos');
const eliminarLabels = document.querySelector('#eliminar');

añadirLabels.onclick = function () {
    const grupo = document.createElement('div');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const espacio = document.createElement('br');
    grupo.appendChild(label);
    grupo.appendChild(input);
    grupo.appendChild(espacio);
    input.className = 'salarios';

    contenedor.appendChild(grupo)
}


eliminarLabels.onclick = function () {
    if (contenedor.lastChild){
        contenedor.removeChild(contenedor.lastChild);
    }
}

const calcularEdades = document.querySelector('#submit');
calcularEdades.onclick = function () {
    const inputs = document.querySelectorAll('.salarios');
    const arrayEdades = [];

    for(let i = 0; i < inputs.length; i++){
        const numero = Number(inputs[i].value)
        arrayEdades.push(numero);
    }

    const encontrarPromedio = function (array) {
            let totalPromedio = 0
            for (let i = 0; i < array.length; i++){
                let contador = array[i];
                totalPromedio += contador
            }
            totalPromedio = totalPromedio / array.length;
            const resultado = document.createElement('p');
            resultado.textContent = `El promedio salarial es: ${totalPromedio}`;
            document.querySelector('#salarioAnual').appendChild(resultado);

            return false;
        }
        encontrarPromedio(arrayEdades)

        const encontrarNumeroMenor = function(array){
            let numeroMenor = array[0];
            for(let i = 0; i < array.length; i++){
                let valor = array[i];
                if( valor < numeroMenor){
                    numeroMenor = valor;
                }
            }
            const resultado = document.createElement('p');
            resultado.textContent = `El salario menor es: ${numeroMenor}`;
            document.querySelector('#salarioMenor').appendChild(resultado);
            return false;
        }
        encontrarNumeroMenor(arrayEdades)


        const encontrarNumeroMayor = function(array){
            let numeroMayor = array[0];
            for(let i = 0; i < array.length; i++){
                let valor = array[i];
                if( valor > numeroMayor){
                    numeroMayor = valor;
                }
            }
            const resultado = document.createElement('p');
            resultado.textContent = `El salario mayor es: ${numeroMayor}`;
            document.querySelector('#salarioMayor').appendChild(resultado);
            return false;
        }
        encontrarNumeroMayor(arrayEdades)
    

        const encontrarSalarioMensualPromedio = function (array){
            let totalPromedio = 0
            for (let i = 0; i < array.length; i++){
                let contador = array[i];
                totalPromedio += contador
            }
            totalPromedio = (totalPromedio / array.length) / 12;
            const resultado = document.createElement('p');
            resultado.textContent = `El promedio mensual salarial es: ${totalPromedio}`;
            document.querySelector('#salarioMensual').appendChild(resultado);
            return false;
        }
        encontrarSalarioMensualPromedio(arrayEdades);

}

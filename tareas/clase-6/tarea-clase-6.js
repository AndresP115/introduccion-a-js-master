/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

const botonIngresoFamiliares = document.querySelector('#ingresar');
botonIngresoFamiliares.onclick = function(){
    const cantidadFamiliares = Number(document.querySelector('#grupo-familiar').value);
        
    for (let i = 0; i < cantidadFamiliares; i++ ) {
        const labels = document.createElement('label');
        const inputs = document.createElement('input');
        const espacio = document.createElement('br');
        labels.textContent = `Familiar ${i + 1}`;
        document.querySelector('#valores').appendChild(labels);
        document.querySelector('#valores').appendChild(inputs);
        inputs.className = 'edades';
        document.querySelector('#valores').appendChild(espacio);
        
    }
    const botonIngresoDatos = document.createElement('button');
    botonIngresoDatos.textContent = 'Calcular';
    document.querySelector('#valores').appendChild(botonIngresoDatos);

    botonIngresoDatos.onclick = function () {
        const extraerEdades = document.querySelectorAll('.edades');
        console.log(extraerEdades);  // Verifica qué contiene

        const arrayDeNumeros = [];

        for( let i = 0; i < extraerEdades.length; i++){
            const numero = Number(extraerEdades[i].value);
            arrayDeNumeros.push(numero);
        };

        console.log(arrayDeNumeros);
    

        const encontrarPromedio = function (array) {
            let totalPromedio = 0
            for (let i = 0; i < array.length; i++){
                let contador = array[i];
                totalPromedio += contador
            }
            return totalPromedio = totalPromedio / array.length;
        }
        


        const encontrarNumeroMenor = function(array){
            let numeroMenor = array[0];
            for(let i = 0; i < array.length; i++){
                let valor = array[i];
                if( valor < numeroMenor){
                    numeroMenor = valor;
                }
            }
            return numeroMenor;
        }


        const encontrarNumeroMayor = function(array){
            let numeroMayor = array[0];
            for(let i = 0; i < array.length; i++){
                let valor = array[i];
                if( valor > numeroMayor){
                    numeroMayor = valor;
                }
            }
            return numeroMayor;
        }
    
    document.querySelector('#promedio').textContent = encontrarPromedio(arrayDeNumeros);
    document.querySelector('#pequeño').textContent = encontrarNumeroMenor(arrayDeNumeros);
    document.querySelector('#grande').textContent = encontrarNumeroMayor(arrayDeNumeros);



    }
    return false;
}



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el 
salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, 
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

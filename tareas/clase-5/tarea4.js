//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numerosArray = document.querySelectorAll('li');
const encontrarPromedio = function(array){
    let totalPromedio = 0;
    for(let i = 0; i < array.length; i++){
        let contador = Number(array[i].innerText);
        // console.log(contador);
        totalPromedio += contador;
    }
    return totalPromedio = totalPromedio / array.length;
}

// console.log(encontrarPromedio(numerosArray));

const encontrarNumeroMenor = function(array){
    let numeroMenor = Number(array[0].innerText);
    for(let i = 0; i < array.length; i++){
        let valor = Number(array[i].innerText);
        if( valor < numeroMenor){
            numeroMenor = valor;
        }
    }
    return numeroMenor;
}

// console.log(encontrarNumeroMenor(numerosArray));

const encontrarNumeroMayor = function(array){
    let numeroMayor = Number(array[0].innerText);
    for(let i = 0; i < array.length; i++){
        let valor = Number(array[i].innerText);
        if( valor > numeroMayor){
            numeroMayor = valor;
        }
    }
    return numeroMayor;
}

// console.log(encontrarNumeroMayor(numerosArray));

const hallarNumeroRepetido = function(array){
    let frecuencia = {};
    for (let i = 0; i < array.length; i++){
        let valor = Number(array[i].innerText);
        if(frecuencia[valor]){
            frecuencia[valor]++
        } else {
            frecuencia[valor] = 1;
        }
    }
    // console.log(frecuencia);

    let numeroRepetido;
    let frecuenciaMaxima = 0;

    for (let numero in frecuencia){
        if(frecuencia[numero] > frecuenciaMaxima){
            numeroRepetido = numero;
            frecuenciaMaxima = frecuencia[numero];
        }
    }
    return numeroRepetido
}
// console.log(hallarNumeroRepetido(numerosArray));

document.querySelector('#promedio').textContent = encontrarPromedio(numerosArray);
document.querySelector('#pequeño').textContent = encontrarNumeroMenor(numerosArray);
document.querySelector('#grande').textContent = encontrarNumeroMayor(numerosArray);
document.querySelector('#repetido').textContent = hallarNumeroRepetido(numerosArray);


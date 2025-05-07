//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const calcularSegundosTotales = function(segundos, minutos, horas){
    let totalTiempo = segundos + (minutos * 60) + (horas * 3600);
    return totalTiempo;
}

const dividirTiempo = function (segundosTotales) {
    let horas = Math.floor(segundosTotales /3600);
    let minutos = Math.floor((segundosTotales %3600) / 60);   
    let segundos = segundosTotales % 60;
    return `${horas}Horas ${minutos}Minutos ${segundos}Segundos`
}

const botonIngresoTiempo = document.querySelector('#calcular-total');
let guardarSegundos = 0;

botonIngresoTiempo.onclick = function(){
    let segundosVideo = Number(document.querySelector('#segundos').value)
    let minutosVideo = Number(document.querySelector('#minutos').value)
    let horasVideo = Number(document.querySelector('#horas').value)
    
    let segundosTotales = calcularSegundosTotales(segundosVideo,minutosVideo,horasVideo);
    guardarSegundos += segundosTotales

    const tiempoOrdenado = dividirTiempo(guardarSegundos);

    document.querySelector('#resultado').textContent = `Tiempo total: ${tiempoOrdenado}`;


        
}

/*
4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número.
*/


var pistas = document.getElementById("pistas");
var numeroRandom = Math.floor(Math.random() * 1000) + 1 //funcion de math, devuelve un numero random entre 0 y 1000 incluido
const form = document.getElementById("form");
form.addEventListener('submit',(e) => {
    e.preventDefault();//para que no se autosubmita
    var prueba = document.getElementById('intento').value
   /* pistas.innerHTML += `<h4>el numero es ${numeroRandom}</h4>`;
    pistas.innerHTML += `<h4>prueba es ${prueba}</h4>`; */

    if (numeroRandom == prueba){
        pistas.innerHTML = `<h4>CORRECTO!!! el número es: ${numeroRandom}</h4>`; 
    }
    else if (prueba>numeroRandom){
        pistas.innerHTML += `<h4>el número es menor que ${prueba}. Segui intentando </h4>`; 
    } else {
        pistas.innerHTML += `<h4>el número es mayor que ${prueba}. Segui intentando </h4>`;
    }
                    
})
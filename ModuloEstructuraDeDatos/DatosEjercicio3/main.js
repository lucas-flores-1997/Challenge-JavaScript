/*
3)Construir una función que sume los elementos de una lista de 
enteros recursivamente.
*/


const form = document.getElementById("form");
var mostrar = document.getElementById("mostrar");

const lista = []

mostrar.innerHTML = `<h4>La lista actualmente no contiene elementos</h4>`;

function Suma (list) {
   // mostrar.innerHTML += `<h4>se ${elemento}</h4>`;
    if (list.length == 0){
        return 0
    } 
    return list[0] + Suma(list.slice(1)) 
    //mostrar.innerHTML += `<h4>i: ${i}</h4>`;
}
function resultado() {
    var sum = Suma (lista)
    mostrar.innerHTML += `<h3>El resultado de la suma es: ${sum}</h3>`;
}


form.addEventListener('submit',(e) => {
    e.preventDefault();

    var nuevoValor = document.getElementById('nuevoValor').valueAsNumber

    if (!isNaN(nuevoValor)){
        lista.push(nuevoValor) }//si el input no esta vacio, hace un push del contenido

    document.getElementById('nuevoValor').value="" //resetea el contenido del input

    if(lista.length > 0 ){
        mostrar.innerHTML = `<h4>La lista actualmente es (${lista})</h4>`; }
         
})


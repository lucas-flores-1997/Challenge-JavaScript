/*
1)Implementar una función que recibe una lista de enteros L y un número entero n de forma
que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
valor

*/


const form = document.getElementById("form");
var mostrar = document.getElementById("mostrar");

const lista = []

mostrar.innerHTML = `<h4>La lista actualmente no contiene elementos</h4>`;

function borrarElemento () {
    var elemento = document.getElementById('borrar').value
   // mostrar.innerHTML += `<h4>se ${elemento}</h4>`;
    var i
    i = lista.indexOf(elemento); //devuelve el indice de la coincidencia entre elemento y los elementos de la lista

    //mostrar.innerHTML += `<h4>i: ${i}</h4>`;
while(i >= 0) {
     lista.splice(i,1) //elimina 1 elemento a partir del indice i 
     i = lista.indexOf(elemento, i) //busca si hay otros elementos iguales, que esten mas alla del primer resultado
    }
     if(lista.length > 0 ){
        mostrar.innerHTML += `<h4>La lista nueva es: (${lista})</h4>`; }
}


form.addEventListener('submit',(e) => {
    e.preventDefault();

    var nuevoValor = document.getElementById('nuevoValor').value 

    if (nuevoValor != "")lista.push(nuevoValor) //si el input no esta vacio, hace un push del contenido

    document.getElementById('nuevoValor').value="" //resetea el contenido del input

    if(lista.length > 0 ){
        mostrar.innerHTML = `<h4>La lista actualmente es (${lista})</h4>`; }
         
})


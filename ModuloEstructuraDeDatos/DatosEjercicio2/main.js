/*
2)Escribir una función Reemplazar que tenga como argumentos una pila con tipo de elemento
int y dos valores int: nuevo y viejo de forma que si el segundo valor aparece en algún lugar de
la pila,sea reemplazado por el segundo.


*/
class Pila {
    constructor(){
        this.items = []
    }

    push (item) {
        this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        if (this.items.length == 0){
            return null;
        }
        return this.items[this.items.length - 1]
    }
    getSize(){
        return this.items.length;
    }
}

const pilaPrincipal = new Pila();

const form = document.getElementById("form");
var mostrar = document.getElementById("mostrar");


mostrar.innerHTML = `<h4>La pila actualmente no contiene elementos</h4>`;





function reemplazarElemento () {
    
   // mostrar.innerHTML += `<h4>se ${elemento}</h4>`;
    var aux 
    var pilaAux = new Pila();
    var viejo = document.getElementById('viejo').value
    var nuevo = document.getElementById('nuevo').value
    /*mostrar.innerHTML += `<h4>viejo ${viejo}</h4>`;
    mostrar.innerHTML += `<h4>nuevo ${nuevo}</h4>`;*/
     while(pilaPrincipal.items.length != 0){    //hasta que la pila principal este vacia, va guardando los valores en la pila auxiliar y reemplazando los viejos con los nuevos
        aux = pilaPrincipal.pop()
        if (aux == viejo){
            pilaAux.push(nuevo)
        } else pilaAux.push(aux)
    }

    while(pilaAux.items.length != 0){  //Aca se vuelven a pasar a la pila principal los valores ya finales
        aux = pilaAux.pop()
        pilaPrincipal.push(aux)

    }
    mostrar.innerHTML += `<h4>La Pila ahora es: [${pilaPrincipal.items}]</h4>`; 

}

form.addEventListener('submit',(e) => {
    e.preventDefault();

    var nuevoValor = document.getElementById('nuevoValor').value 

    if (nuevoValor != "")pilaPrincipal.push(nuevoValor) //si el input no esta vacio, hace un push del contenido

    document.getElementById('nuevoValor').value="" //resetea el contenido del input
    mostrar.innerHTML = `<h4>La Pila actualmente contiene [${pilaPrincipal.items}]</h4>`;
    




         
})
/*
5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
caso se terminará el programa.
Al terminar, mostrará lo siguiente:
a. – mayor número introducido
b. – menor número introducido
c. – suma de todos los números
d. – suma de los números
*/


var numero = document.getElementById("numero");
var respuesta = document.getElementById("respuesta");
const form = document.getElementById("form");



const vectorNum = [] 
var max = null
var min = null
var sumador = 0

function calcularMax (max,prueba){
    if (max == null){

        return prueba


    } else 
            if (prueba>max){

                return prueba        
    } else return max
}
function calcularMin (min,prueba){
    if (min == null){

        return prueba


    } else 
            if (prueba<min){

                return prueba       
    } else return min
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    //para que no se autosubmita
    var prueba = document.getElementById('numero').value
    vectorNum.push(prueba)
    max = calcularMax (max,prueba)
    min = calcularMin (min,prueba)
    sumador += parseInt(prueba)
    respuesta.innerHTML = ` 
                            <h3>El Valor maximo es: ${max}</h3>
                            <h3>El Valor minimo es: ${max}</h3>
                            <h3>La suma de los numeros ingresados es: ${sumador}</h3>
                            <h3>Los numeros ingresados fueron: ${vectorNum}</h3>`; 
    document.getElementById('numero').value=""

   /*
        ACLARACION, COMO ESTOY HACIENDO QUE SE EDITE EL HTML, 
        NO ME TOME EL TRABAJO DE HACER QUE EL PROGRAMA SE DETENGA AL INGRESAR -1
        PERO SE HARIA CON UN SWITCH QUE COMPARE PRUEBE, Y EJECUTE LA FUNCION PARA 
        MOSTRARLO EN PANTALLA. ASI EN TIEMPO REAL CREO QUE SE APRECIA TAMBIEN

     */               
})
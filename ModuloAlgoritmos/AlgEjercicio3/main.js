/* 
3. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar.
*/

const form = document.getElementById("form");
var respuesta = document.getElementById("respuesta");
function calcular(años,valor,hora){
    var pago = 0
    pago = hora * valor
    if (años >= 10){

       pago += (años * 30) 

    }
    return pago 
}


form.addEventListener('submit',(e) => {
    e.preventDefault();//para que no se autosubmita

    var valorHora = document.getElementById('valorHora').value
    var nombre = document.getElementById('nombre').value
    var antiguedad = document.getElementById('antiguedad').value
    var horasTrabajadas = document.getElementById('horas').value
    pago = calcular(antiguedad,valorHora,horasTrabajadas)
    

    respuesta.innerHTML = ` <h2>${nombre}</h2>
                            <h2>Años de antiguedad:${antiguedad}</h2>
                            <br>
                            <h2>Total a Cobrar: $ ${pago}</h2>
                             `;  

   /* intentos.innerHTML = `<h4>contra correcta: ${contraseñaCorrecta}</h4>
                          <h4>contra prueba: ${contraseñaPrueba}</h4>      `;  esto era para mostrar las co


    if (contraseñaCorrecta === contraseñaPrueba){         //si son iguales se mostrara este mensaje
        intentos.innerHTML = `<h2>Felicitaciones, recordás tu contraseña</h2> `;         
    }
    else{ 
        alert('Te quedan '+ intentosRestantes +' intentos restantes');
                                             //si no es correcta envia una alerta con el numero de intentos
        if(intentosRestantes === 0){    // cuando el numero de intentos llega a 0 aparece el mensaje
            intentos.innerHTML = `<h2>Tenes que ejercitar la memoria</h2> `; 
            intentosRestantes = 3;
        }
        intentosRestantes--;   
    }    
    */
})


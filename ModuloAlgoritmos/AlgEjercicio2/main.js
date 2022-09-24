/*  
    2. Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
presione una tecla, luego de esto se cerrará el programa.


*/
const formulario = document.getElementById("form");



intentosRestantes = 2
var intentos = document.getElementById("intentos"); //para interactuar con el div del HTML
document.addEventListener('keypress', (a) => {
    intentos.innerHTML = `<h4>contra correcta: ${contraseñaCorrecta}</h4>`
})
form.addEventListener('submit',(e) => {
    e.preventDefault();//para que no se autosubmita

    var contraseñaPrueba = document.getElementById('password').value
    var contraseñaCorrecta = document.getElementById('realPassword').value

   /* intentos.innerHTML = `<h4>contra correcta: ${contraseñaCorrecta}</h4>
                          <h4>contra prueba: ${contraseñaPrueba}</h4>      `;  esto era para mostrar las contraseñas ingresadas en pantalla */


    if (contraseñaCorrecta === contraseñaPrueba){         //si son iguales se mostrara este mensaje
        intentos.innerHTML = `<h2>Felicitaciones, recordás tu contraseña</h2> `;         
    }
    else{ 
        alert('Te quedan '+ intentosRestantes +' intentos restantes');
                                             //si no es correcta envia una alerta con el numero de intentos restantes
        if(intentosRestantes === 0){    // cuando el numero de intentos llega a 0 aparece el mensaje
            intentos.innerHTML = `<h2>Tenes que ejercitar la memoria</h2> `; 
            intentosRestantes = 3;
        }
        intentosRestantes--;   
    }    
})





 

/*
var form = getElementById('form');
var intentos = document.getElementById("intentos"); 

function prueba(){
var password = document.formulario.value;
var intentosRestantes = 3;


while (intentosRestantes>=1){
    if(password===passCorrecta){
        alert('felicidades');
        close();
    }
    else{
        intentos.innerHTML += <h4>${intentosRestantes}</h4>;
        intentosRestantes--;
        
    } 
}
}
var intentos = document.getElementById("intentos"); 



form.addEventListener('submit',(e)=>){
    let mensaje[];
    var intentosRestantes = 3;
    while (intentosRestantes>=1){
    if(password===passCorrecta){  
       mensaje.push('Felicitaciones, recordas tu contraseña');
    }
    else {intentosRestantes--;
    mensaje.push('Te quedan');
    }
    e.preventDefault();
}}



function Primo(numero){
    for (let i = 2 ; i<numero / 2 ; i++) {
        if (numero % i === 0){
            return false;
        }
    }
    return true;

}

document.write('el numero ' + numero);

if (Primo(numero)){
    document.write(' es primo');
} else {
    document.write(' no es primo');
}
*/
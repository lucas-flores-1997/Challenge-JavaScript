 class password {


    //CONSTRUCTORES
    constructor (largo) {
        this.largo = largo;
        this.pass = this.generarPassword(largo);
    }

    //GETTERS
    get Largo(){
        return this.largo;
    }

    get Pass(){
        return this.pass;
    }

    //SETTERS
    set Largo(largo) {
        this.largo = largo;
    }

    set Pass(contra) {
        this.pass = contra;
    }

    //generador de random pass
    generarPassword(largo){
        var string = '';

        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (var i = largo; i > 0; --i) string += chars[Math.floor(Math.random() * chars.length)];

        return string;
    }

    esFuerte(c) {
        var mayus = /[A-Z]/g
        var minus = /[a-z]/g
        var num = /[0-9]/g
        var sumMayus = 0
        var sumMinus = 0
        var sumNum = 0
        var array = c.match(mayus)
            if(array != null)
            sumMayus+= array.length
            array = c.match(minus)
            if(array != null)
            sumMinus += array.length
            array = c.match(num)
            if(array != null)
            sumNum+= array.length
        
        if (sumMayus>2 && sumMinus>1 && sumNum>1){
        return 1 } 
        else { return 0}
        
    }

    }




const form = document.getElementById("form");
var mostrar = document.getElementById("mostrar");
form.addEventListener('submit',(e) => {
    e.preventDefault();

    
    var numCaracteres = document.getElementById("Carac").value;
    mostrar.innerHTML = `<h4>La contra es; [${numCaracteres}]</h4>`; 
    const password1 = new password(numCaracteres);
    var contra = password1.Pass
    mostrar.innerHTML = `<h4>La contraseña generada es: [${contra}]</h4>`; 
    if(password1.esFuerte(contra) == 1) {
        mostrar.innerHTML += `<h4>La contraseña es fuerte</h4>`; 
    }else {
        mostrar.innerHTML += `<h4>La contraseña es NO fuerte</h4>`; 
    }
    
})

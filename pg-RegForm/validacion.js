function contieneSimbolos(valor) {
    return /[^a-zA-Z0-9]/.test(valor);
};



let pass = document.getElementById('password');
let passError = document.getElementById('passwordError');


//let error = document.getElementById('error');

//Funciones de validacion de datos

function validarUsuario() {
    var user = document.getElementById('userName');
    let userError = document.getElementById('userNameError');

    var mensajesError = [];

    if (user.value === null || user.value === ''){
        mensajesError.push('1');
        userError.textContent = 'Ingrese un nombre de Usuario';
    }else if (contieneSimbolos(user.value)) {
        mensajesError.push('1');
        userError.textContent = 'El nombre de usuario no debe contener simbolos';
    } else {
        userError.textContent = '';
    }
    return mensajesError;
}

//ejecucion de la funcion de validacion de datos
function enviarform() {
    var errores1 = validarUsuario();


    if (errores1.length > 0) {
        return false;
    } else {
        return true;
    }
}


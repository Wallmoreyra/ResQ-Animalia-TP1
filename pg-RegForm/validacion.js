function contieneSimbolos(valor) {
    return /[^a-zA-Z0-9]/.test(valor);
};
function tamaño8a15(valor) {
    return /^.{8,15}$/.test(valor);
};
function tamañoDe8(valor) {
    return /^.{8}$/.test(valor);
};
function tamaño3a20(valor) {
    return /^.{3,20}$/.test(valor);
};
function unaMayus(valor) {
    return /[A-Z]/.test(valor);
};
function unaMinus(valor) {
    return /[a-z]/.test(valor);
};
function unNumero(valor) {
    return /\d/.test(valor);
};
function verifEmail(valor) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regexEmail.test(valor);
};



let pass = document.getElementById('password');
let passError = document.getElementById('passwordError');


//let error = document.getElementById('error');

//Funciones de validacion de datos

function validarUsuario() {
    let user = document.getElementById('userName');
    let userError = document.getElementById('userNameError');

    var mensajesError = [];

    if (user.value === null || user.value === ''){
        mensajesError.push('Ingrese un nombre de Usuario');
        userError.textContent = 'Ingrese un nombre de Usuario';
    }else if (contieneSimbolos(user.value)) {
        mensajesError.push('El nombre de usuario no debe contener simbolos');
        userError.textContent = 'El nombre de usuario no debe contener simbolos';
    } else {
        userError.textContent = '';
    }
    return mensajesError;
}

function validarPassword() {
    let pass = document.getElementById('password');
    let passError = document.getElementById('passwordError');

    var mensajesError = [];

    if (pass.value === null || pass.value === ''){
        mensajesError.push('Ingrese una password');
        passError.textContent = 'Ingrese una password';
    }else if (!tamaño8a15(pass.value)) {
        mensajesError.push('La password debe tener enter 8 y 15 caracteres');
        passError.textContent = 'La password debe tener enter 8 y 15 caracteres';
    }else if (!unaMayus(pass.value) || !unaMinus(pass.value)) {
        mensajesError.push('La password debe contener al menos una minúscula y una mayúscula.');
        passError.textContent = 'La password debe contener al menos una minúscula y una mayúscula.';
    }else if (!unNumero(pass.value) || !contieneSimbolos(pass.value)) {
        mensajesError.push('La password debe contener al menos un símbolo y un número.');
        passError.textContent = 'La password debe contener al menos un símbolo y un número.';
    } else {
        passError.textContent = '';
    }
    return mensajesError;
}

function validarNombre() {
    let name = document.getElementById('name');
    let nameError = document.getElementById('nameError');

    var mensajesError = [];

    if (name.value === null || name.value === ''){
        mensajesError.push('Ingrese su nombre');
        nameError.textContent = 'Ingrese su nombre';
    }else if (!tamaño3a20(name.value)) {
        mensajesError.push('El nombre debe tener entre 3 y 20 caracteres.');
        nameError.textContent = 'El nombre debe tener entre 3 y 20 caracteres.';
    } else {
        nameError.textContent = '';
    }
    return mensajesError;
}

function validarApellido() {
    let lastName = document.getElementById('lastName');
    let lastNameError = document.getElementById('lastNameError');

    var mensajesError = [];

    if (lastName.value === null || lastName.value === ''){
        mensajesError.push('Ingrese su apellido');
        lastNameError.textContent = 'Ingrese su apellido';
    }else if (!tamaño3a20(lastName.value)) {
        mensajesError.push('El apellido debe tener entre 3 y 20 caracteres.');
        lastNameError.textContent = 'El apellido debe tener entre 3 y 20 caracteres.';
    } else {
        lastNameError.textContent = '';
    }
    return mensajesError;
}

function validarDNI() {
    let dni = document.getElementById('DNI');
    let dniError = document.getElementById('DNIError');

    var mensajesError = [];

    if (dni.value === null || dni.value === ''){
        mensajesError.push('Ingrese su DNI');
        dniError.textContent = 'Ingrese su DNI';
    }else if (!tamañoDe8(dni.value)) {
        mensajesError.push('El DNI tiene que tener 8 digitos');
        dniError.textContent = 'El DNI tiene que tener 8 digitos';
    }else if (isNaN(parseInt(dni.value))) {
        mensajesError.push('Solo se admiten números en le campo DNI!');
        dniError.textContent = 'Solo se admiten números en le campo DNI!';
    } else {
        dniError.textContent = '';
    }
    return mensajesError;
}

function validarEmail() {
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError');

    var mensajesError = [];

    if (email.value === null || email.value === ''){
        mensajesError.push('Ingrese una dirección de correo electrónico');
        emailError.textContent = 'Ingrese una dirección de correo electrónico';
    }else if (!verifEmail(email.value)) {
        mensajesError.push('La dirección de correo electrónico no es válida');
        emailError.textContent = 'La dirección de correo electrónico no es válida';
    } else {
        emailError.textContent = '';
    }
    return mensajesError;
}

document.addEventListener('DOMContentLoaded', function() {
    var passwordField = document.getElementById('password');
    passwordField.addEventListener('focus', function() {
        this.setAttribute('type', 'password');
    });
    passwordField.addEventListener('keydown', function() {
        this.removeAttribute('readonly');
    });
    passwordField.addEventListener('blur', function() {
        this.setAttribute('readonly', 'readonly');
    });
});

//ejecucion de la funcion de validacion de datos
function enviarform() {
    var errores1 = validarUsuario();
    var errores2 = validarPassword();
    var errores3 = validarNombre();
    var errores4 = validarApellido();
    var errores5 = validarDNI();
    var errores6 = validarEmail();


    if (errores1.length > 0 || errores2.length > 0 || errores3.length > 0 || errores4.length > 0 || errores5.length > 0 || errores6.length > 0) {
        return false;
    } else {
        return true;
    }
}


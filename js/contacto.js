//Expresiones regulares para validación
const regExNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExTel = /^\d{7,14}$/;
//se recuperan los campos 

let nombreInput = document.getElementById('nombre');
let emailInput = document.getElementById('email');
let telInput = document.getElementById('tel');
let emailOblig = document.getElementById('email-oblig');
let nombreOblig = document.getElementById('nombre-oblig');

let validarNombre = document.getElementById('validarNombre');
let validarEmail = document.getElementById('validarEmail');
let validarTel = document.getElementById('validarTel');
const datos = [];//Array para recuperar datos




function validar() {
    valNombre();
    valEmail();
    valTel();

    return false;
}

function valNombre() {
    let icono = document.createElement("i");
    let parrafo = document.createElement("small");
    let nombreTxt = nombreInput.value.trim();

    if (nombreTxt == '') {

        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarNombre.appendChild(icono);
        parrafo.innerHTML = "El campo no puede estar vacío";
        parrafo.classList.add("parrafo-error");
        validarNombre.appendChild(parrafo);
        nombreOblig.style.visibility = "visible";

    } else if (!regExNombre.test(nombreTxt)) {

        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarNombre.appendChild(icono);
        parrafo.innerHTML = "Ingrese un nombre valido";
        parrafo.classList.add("parrafo-error");
        validarNombre.appendChild(parrafo);

    } else if (regExNombre.test(nombreTxt)) {

        icono.classList.add("validar", "fa", "fa-check-circle", "exito");
        validarNombre.appendChild(icono);
        parrafo.innerHTML = "El nombre ingresado es correcto";
        parrafo.classList.add("parrafo-exito");
        validarNombre.appendChild(parrafo);
        datos.push(nombreTxt);

    }

}

function valEmail() {
    let icono = document.createElement("i");
    let parrafo = document.createElement("small");
    let emailTxt = emailInput.value.trim();


    if (emailTxt == '') {

        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarEmail.appendChild(icono);
        parrafo.innerHTML = "El campo no puede estar vacío";
        parrafo.classList.add("parrafo-error");
        validarEmail.appendChild(parrafo);
        emailOblig.style.visibility = "visible";

    } else if (!regExEmail.test(emailTxt)) {

        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarEmail.appendChild(icono);
        parrafo.innerHTML = "Ingrese un email valido";
        parrafo.classList.add("parrafo-error");
        validarEmail.appendChild(parrafo);

    } else if (regExEmail.test(emailTxt)) {

        icono.classList.add("validar", "fa", "fa-check-circle", "exito");
        validarEmail.appendChild(icono);
        parrafo.innerHTML = "El email ingresado es correcto";
        parrafo.classList.add("parrafo-exito");
        validarEmail.appendChild(parrafo);
        datos.push(emailTxt);
    }
}

function valTel() {
    let icono = document.createElement("i");
    let parrafo = document.createElement("small");
    let telTxt = Number(telInput.value.trim());
    console.log(telTxt);
    if (!regExTel.test(telTxt)) {

        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarTel.appendChild(icono);
        parrafo.innerHTML = "Ingrese un número valido";
        parrafo.classList.add("parrafo-error");
        validarTel.appendChild(parrafo);

    } else if (regExTel.test(telTxt)) {

        icono.classList.add("validar", "fa", "fa-check-circle", "exito");
        validarTel.appendChild(icono);
        parrafo.innerHTML = "El número ingresado es correcto";
        parrafo.classList.add("parrafo-exito");
        validarTel.appendChild(parrafo);
        datos.push(telTxt);

    }
}




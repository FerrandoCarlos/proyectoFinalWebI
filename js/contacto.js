//Expresiones regulares para validación
const regExNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExTel = /^\d{7,14}$/;
//se recuperan los campos y botón

let nombreInput = document.getElementById('nombre');
let emailInput = document.getElementById('email');
let telInput = document.getElementById('tel');


let validarNombre = document.getElementById('validarNombre');
let validarEmail = document.getElementById('validarEmail');


const icono = document.createElement("i");
const parrafo = document.createElement("small");

//limpiarCampos();

function validar() {

    valNombre();
    valEmail();

    return false;
}

function valNombre() {

    let nombreTxt = nombreInput.value.trim();

    if (nombreTxt == '') {
        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarNombre.appendChild(icono);
        parrafo.innerHTML = "El campo no puede estar vacío";
        parrafo.classList.add("parrafo-error");
        validarNombre.appendChild(parrafo);
    } else if (!regExNombre.test(nombreTxt)) {
        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarNombre.appendChild(icono);
        parrafo.innerHTML = "Ingrese un nombre valido";
        parrafo.classList.add("parrafo-error");
        validarNombre.appendChild(parrafo);
    }
    if (regExNombre.test(nombreTxt)) {
        icono.classList.add("validar", "fa", "fa-check-circle", "exito");
        validarNombre.appendChild(icono);
        parrafo.innerHTML = "El nombre ingresado es correcto";
        parrafo.classList.add("parrafo-exito");
        validarNombre.appendChild(parrafo);
    }
    console.log("entro a validar nombre")
}

function valEmail() {
    let emailTxt = emailInput.value.trim();

    if (emailTxt == '') {
        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarEmail.appendChild(icono);
        parrafo.innerHTML = "El campo no puede estar vacío";
        parrafo.classList.add("parrafo-error");
        validarEmail.appendChild(parrafo);
    } else if (!regExNombre.test(emailTxt)) {
        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarEmail.appendChild(icono);
        parrafo.innerHTML = "Ingrese un nombre valido";
        parrafo.classList.add("parrafo-error");
        validarEmail.appendChild(parrafo);
    }

    if (regExNombre.test(emailTxt)) {
        icono.classList.add("validar", "fa", "fa-check-circle", "exito");
        validarEmail.appendChild(icono);
        parrafo.innerHTML = "El nombre ingresado es correcto";
        parrafo.classList.add("parrafo-exito");
        validarEmail.appendChild(parrafo);
    }
    console.log("entro a validar email")
}
function limpiarCampos() {
    parrafo.innerHTML = "";
    icono.classList.remove("validar", "fa", "fa-times-circle", "error");
    icono.classList.remove("validar", "fa", "fa-check-circle", "exito");
    parrafo.classList.remove("error");
    parrafo.classList.remove("exito");

}

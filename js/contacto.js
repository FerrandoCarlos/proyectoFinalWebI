//Expresiones regulares para validación
const regExNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExTel = /^\d{7,14}$/;
//se recuperan los campos 
let nombreInput = document.getElementById('nombre');
let emailInput = document.getElementById('email');
let telInput = document.getElementById('tel');


let validarNombre = document.getElementById('validarNombre');
let validarEmail = document.getElementById('validarEmail');
let validarTel = document.getElementById('validarTel');
let txtNombre = document.getElementById('txtNombre');
let txtEmail = document.getElementById('txtEmail');
let txtTel = document.getElementById('txtTel');
const datos = [];//Array para recuperar datos




function validar() {

    valNombre();
    valEmail();
    valTel();
    return false;
}

function validarCampo(input, regex, valida, container, obligElemento, exitoMsg, errorMsg) {

    const parrafo = document.createElement("small");
    const valor = input.value.trim();

    if (valor === '') {                  //se revisa valores vacíos
        if (obligElemento !== null) {
            icono.classList.add("validar", "fa", "fa-times-circle", "error");
            parrafo.textContent = "El campo no puede ser vacío";
            obligElemento.style.visibility = "visible";
        }
    } else if (regex.test(valor)) {
        icono.classList.remove("validar", "fa", "fa-times-circle", "error");     //se valida por si el campo no cumple con la expresión regular
        icono.classList.add("validar", "fa", "fa-check-circle", "exito");
        parrafo.textContent = exitoMsg;
        datos.push(valor);                //Se guardan los datos
    } else {
        icono.classList.remove("validar", "fa", "fa-check-circle", "exito");
        icono.classList.remove("validar", "fa", "fa-times-circle", "error");     //si no valida casos anteriores es campo es correcto 
        parrafo.textContent = errorMsg;
    }

    parrafo.classList.add(valor === '' || !regex.test(valor) ? "parrafo-error" : "parrafo-exito");  //se agrega clase de error o exito al small 

    container.appendChild(parrafo);

}

function valNombre() {
    validarCampo(
        nombreInput,
        regExNombre,
        validarNombre,
        txtNombre,
        "si",
        "El nombre ingresado es correcto",
        "Ingrese un nombre válido");

}

function valEmail() {
    validarCampo(
        emailInput,
        regExEmail,
        validarEmail,
        txtEmail,
        "si",
        "El email ingresado es correcto",
        "Ingrese un email válido"
    );
}

function valTel() {
    validarCampo(
        telInput,
        regExTel,
        validarTel,
        txtTel,
        null,
        "El teléfono ingresado es correcto",
        "Ingrese un teléfono válido"
    );
}




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
    container.innerHTML = ''; //Elimino el contenido del div 
    parrafo.classList.remove("exito", "error");
    if (valor === '' && obligElemento !== null) {                  //se revisa valores vacíos
        parrafo.classList.remove("exito");
        parrafo.classList.add("error");
        parrafo.textContent = "El campo es obligatorio y no puede estar vacío";
        valida.childNodes[3].style.visibility = "hidden";
        valida.childNodes[5].style.visibility = "visible";

    } else if (!regex.test(valor)) {
        parrafo.classList.remove("exito");
        parrafo.classList.add("error")          //Se revisan valores no correctos
        parrafo.textContent = errorMsg;
        valida.childNodes[3].style.visibility = "hidden";
        valida.childNodes[5].style.visibility = "visible";
    } else {
        parrafo.classList.remove("error");
        parrafo.classList.add("exito");
        parrafo.textContent = exitoMsg;
        valida.childNodes[3].style.visibility = "visible";
        valida.childNodes[5].style.visibility = "hidden";        //Se revisan valores correctos
        datos.push(valor);                //Se guardan los datos
    }

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




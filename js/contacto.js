//Expresiones regulares para validación
const regExNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExTel = /^\d{7,14}$/;
//se recuperan los campos y botón

let nombreInput = document.getElementById('nombre');
let emailInput = document.getElementById('email');
let telInput = document.getElementById('tel');
let servicioInput = document.getElementById('servicio');
let mensajeInput = document.getElementById('mensaje');
let validarNombre = document.getElementById('validarNombre')





function validar() {
    let nombreValor = nombreInput.value.trim();
    validarNombre(nombreValor);
    console.log(nombreValor);


    return false;
}

function validarNombre(nombre) {
    if (nombre == '') {
        const icono = document.createElement("i");
        icono.classList.add("validar", "fa", "fa-times-circle", "error");
        validarNombre.appendChild(icono);
    }
}
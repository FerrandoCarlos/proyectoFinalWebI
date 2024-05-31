//Expresiones regulares para validación
const regExNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExTel = /^[1-9]\d{9,14}$/;
//se recuperan los campos 
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const formulario = document.getElementById("usuario-form");

const validarNombre = document.getElementById('validarNombre');
const validarEmail = document.getElementById('validarEmail');
const validarTel = document.getElementById('validarTel');
const txtNombre = document.getElementById('txtNombre');
const txtEmail = document.getElementById('txtEmail');
const txtTel = document.getElementById('txtTel');
const servicioContacto = document.getElementById('servicio');
const txtMensaje = document.getElementById('mensaje');
const listaDatos = document.getElementById('datos');

//Array global
var datos = [];


function validar() {
    //Array para recuperar datos

    const nombreValido = valNombre();
    const emailValido = valEmail();
    const telValido = valTel();

    //valServicio(datos);
    // valMensaje();

    if (nombreValido && emailValido && telValido) {

        cargarDatos();

        for (let dato of datos) {
            let li = document.createElement("li");
            li.innerHTML = dato;
            listaDatos.appendChild(li);
        }
        datos = null;
        limpiar();
    }

    return false;
}

function cargarDatos() {
    datos.push(nombreInput.value);
    datos.push(emailInput.value);
    datos.push(telInput.value);
    datos.push(servicioContacto.value);
    datos.push(txtMensaje.value);


}

function validarCampo(input, regex, valida, container, obligElemento, exitoMsg, errorMsg) {

    const valor = input.value.trim();
    container.innerHTML = ''; //Elimino el contenido del div 


    const parrafo = document.createElement("small");
    container.appendChild(parrafo);

    if (valor === '' && obligElemento) {  //se revisa valores vacíos                
        parrafo.classList.remove("exito");
        parrafo.classList.add("error");
        parrafo.textContent = "El campo es obligatorio y no puede estar vacío";
        valida.childNodes[3].style.visibility = "hidden";
        valida.childNodes[5].style.visibility = "visible";
        return false;

    } else if (!regex.test(valor) && valor !== '') {//Se revisan valores no correctos
        parrafo.classList.remove("exito");
        parrafo.classList.add("error")
        parrafo.textContent = errorMsg;
        valida.childNodes[3].style.visibility = "hidden";
        valida.childNodes[5].style.visibility = "visible";
        return false;

    } else {  //Se revisan valores correctos
        if (valor === '') {
            parrafo.classList.remove("error");
            parrafo.classList.add("exito");
            parrafo.textContent = exitoMsg;
            valida.childNodes[3].style.visibility = "visible";
            valida.childNodes[5].style.visibility = "hidden";
        }

        return true;

    }
}

function valNombre() {
    return validarCampo(
        nombreInput,
        regExNombre,
        validarNombre,
        txtNombre,
        true,
        "El nombre ingresado es correcto",
        "Ingrese un nombre válido");

}

function valEmail() {
    return validarCampo(
        emailInput,
        regExEmail,
        validarEmail,
        txtEmail,
        true,
        "El email ingresado es correcto",
        "Ingrese un email válido"
    );

}

function valTel() {
    return validarCampo(
        telInput,
        regExTel,
        validarTel,
        txtTel,
        false,
        "El teléfono ingresado es correcto",
        "Ingrese un teléfono válido"
    );

}

/* function valServicio(datos) {
    const valor = servicioContacto.value;
    if (valor !== '') {
        datos.push(servicioContacto.value);
    } else {
        datos.push("No especificado");
    }
}



function valMensaje(datos) {
    const valor = txtMensaje.value.trim();
    if (valor !== '') {
        datos.push(valor);
    } else {
        datos.push("Mensaje no especificado");
    }
} */

function limpiar() {
    //se esconden los iconos
    [validarNombre, validarEmail, validarTel].forEach(validar => {
        validar.childNodes[3].style.visibility = "hidden";
        validar.childNodes[5].style.visibility = "hidden";
    });
    //se borran todos los mensajes de error
    [txtNombre, txtEmail, txtTel].forEach(txt => {
        txt.innerHTML = '';
    });
    //se borran los textos 
    txtMensaje.value = '';
    servicioContacto.value = '';
    formulario.reset();//se borran los campos
}



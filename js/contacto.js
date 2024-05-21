const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

//Expresiones regulares para validación

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,//letras y espacios pueden llevar acentos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//
    telefono: /^\d{7,14}$/ //7 a 14 números
}

const validarFormulario = (e) => {

    switch (e.target.name) {
        case "nombre":
            //console.log(inputs[0].value);
             document.querySelector("#name-error").insertAdjacentHTML("beforeend", `
            <i class="fa-solid fa-circle-xmark"></i>`);
            break;
        case "correo":

            break;
        case "telefono":

            break;
    }
}
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
});
formulario.addEventListener("submit", (e) => {
    e.preventDefault();//prevenimos el envió del formulario
});


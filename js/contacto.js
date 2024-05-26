const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

//Expresiones regulares para validación
const regExNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regExEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regExTel =/^\d{7,14}$/; 




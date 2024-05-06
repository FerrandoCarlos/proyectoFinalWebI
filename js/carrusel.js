/* 
Uso de carrousel.
Debe ser creado por el estudiante, 
es decir, no de una librería o copiado de un tutorial. 

La rotación de imágenes debe estar implementada en javascript y usando arrays. 
Debe tener botones para avanzar y retroceder. 
Debe ser circular. Es decir que si se avanza desde el último elemento, se debe ir al primero, 
y si se retrocede desde el primero, volver al último. 

*/

//Varaibles
const directorio = "img/";
const img1 = document.querySelector("#img");

const prev = document.querySelector("#pre");
const next = document.querySelector("#next");
let indice = 0;
const galeria = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

carrousel();
prev.addEventListener('click', function () {

    indice = (indice - 1 + galeria.length) % galeria.length;
    carrousel();
});

next.addEventListener('click', function () {
    indice = (indice + 1) % galeria.length;
    carrousel();
});

function carrousel() {

    img1.classList.add('hidden');
    setTimeout(function () {

        img1.classList.remove('hidden');
        img1.src = directorio + galeria[indice];
    }, 150);

}




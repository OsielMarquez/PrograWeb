// Seleccionar elementos
const menu = document.getElementById("menu");
const eliminarBtn = document.getElementById("eliminarPrimero");
const agregarBtn = document.getElementById("agregarElemento");

// Función para eliminar el primer elemento del menú
eliminarBtn.addEventListener("click", () => {
    if (menu.firstElementChild) {
        menu.firstElementChild.remove();
    } else {
        alert("No hay más elementos para eliminar.");
    }
});

// Función para agregar un nuevo enlace al menú
agregarBtn.addEventListener("click", () => {
    const nuevoTitulo = prompt("Introduce el título de la película:");
    const nuevoEnlace = prompt("Introduce el enlace (URL) de la película:");

    if (nuevoTitulo && nuevoEnlace) {
        const nuevoElemento = document.createElement("li");
        const nuevoLink = document.createElement("a");
        nuevoLink.href = nuevoEnlace;
        nuevoLink.textContent = nuevoTitulo;
        nuevoLink.target = "_blank";

        nuevoElemento.appendChild(nuevoLink);
        menu.appendChild(nuevoElemento);
    } else {
        alert("El título y el enlace son necesarios para agregar una nueva película.");
    }
});

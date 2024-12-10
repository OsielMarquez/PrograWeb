// Seleccionar el botón y el body
const boton = document.getElementById('mostrarFrutasBtn');
const body = document.body;

// Colores de fondo para alternar
const coloresDeFondo = ['#091057', '#024CAA', '#4CAF50', '#EC8305', '#DBD3D3'];
let indiceColor = 0; // Para cambiar el color de fondo cada vez

// Evento click en el botón
boton.addEventListener('click', () => {
    // Cambiar el fondo del body
    indiceColor = (indiceColor + 1) % coloresDeFondo.length; // Alterna entre los colores
    body.style.backgroundColor = coloresDeFondo[indiceColor];
});

// Crear un arreglo vacío para almacenar las frutas
let frutas = [];

// Solicitar al usuario que ingrese frutas
let continuar = true;
while (continuar) {
    let fruta = prompt("Ingresa el nombre de una fruta (o deja vacío para terminar):");

    if (fruta) {
        frutas.push(fruta); // Agregar la fruta al arreglo
    } else {
        continuar = false; // Terminar si el campo está vacío
    }
}

// Evento para el botón que mostrará las frutas
document.getElementById("mostrarFrutasBtn").addEventListener("click", function() {
    // Mostrar el div que contiene las frutas
    const frutasDiv = document.getElementById("frutasList");
    frutasDiv.style.display = "block"; // Hacer visible el div
    
    // Mostrar las frutas ingresadas con .join
    frutasDiv.textContent = "Frutas ingresadas: " + frutas.join(", ");
});

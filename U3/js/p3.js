let nombre, actiFav;

// Función para mostrar bienvenida y recoger los datos
function bienvenida() {
    nombre = prompt("¿Cuál es su nombre?"); 
    actiFav = prompt("¿Cuál es su actividad favorita?");
}

// Función para confirmar si los datos son correctos
function verificaDatos() {
    let datosCorrec = confirm(`¿Los datos ingresados son correctos? 
    Nombre: ${nombre} 
    Actividad favorita: ${actiFav}`);
    
    if (datosCorrec) {
        alert("Registro guardado correctamente");
    } else {
        alert("Registros borrados");
    }
}

// Función libre
function verificaDueño() {
    if (nombre === "Osiel") {
        alert("Un saludo al gran señor");
    }
}

// Función para mostrar un mensaje final
function despedida() {
    alert("¡Todo en orden?");
}

bienvenida(); 
verificaDatos(); 
verificaDueño(); 
despedida();

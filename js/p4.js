// Definición de materias y horarios
const SO = "Sistemas Operativos - 8:00 a 9:00";
const PEA = "Principios Eléctricos y Aplicaciones - 15:00 a 16:00";
const MN = "Métodos Numéricos - 16:00 a 17:00";
const PW = "Programación Web - 17:00 a 18:00";
const LAI = "Lenguajes y Autómatas I - 18:00 a 19:00";
const ED = "Ecuaciones Diferenciales - 19:00 a 20:00";

// Definición del horario
const horarioSemestre = {
    horario: {
        lunes: [SO, PEA, MN, PW, LAI, ED],
        martes: [SO, PEA, MN, PW, LAI, ED],
        miercoles: [SO, PEA, MN, PW, LAI, ED],
        jueves: [SO, PEA, MN, PW, LAI, ED],
        viernes: [PEA, MN, PW, LAI, ED]
    },
    imprimirHorario() {
        return Object.entries(this.horario)
            .map(([dia, clases]) => `${dia.toUpperCase()}:\n${clases.join("\n")}`)
            .join("\n\n");
    }
};

// Agregar evento al div para mostrar el horario
document.getElementById("mostrarHorarioBtn").addEventListener("click", () => {
    const confirmar = confirm("¿Quieres mostrar el horario?");
    if (confirmar) {
        document.getElementById("horario").textContent = horarioSemestre.imprimirHorario();
    }
});
// Definición de materias
const materias = ["Sistemas Operativos", "Principios Eléctricos y Aplicaciones", "Métodos Numéricos", "Programación Web", "Lenguajes y Autómatas I", "Ecuaciones Diferenciales"];
const calificaciones = [];

// Variables para la suma y promedio
let suma = 0;
let promedio = 0;

// Evento para el botón de calificaciones
document.getElementById("califa").addEventListener("click", function() {
    // Confirmación para comenzar
    if (confirm("¿Quieres ingresar las calificaciones?")) {
        // Limpiar el recuadro de resultados al inicio
        document.getElementById("resultado").textContent = '';
        
        // Pedir calificaciones para cada materia
        let calificacionesIngresadas = false; // Flag para verificar si se ingresaron calificaciones
        for (let i = 0; i < materias.length; i++) {
            let calificacion;
            do {
                calificacion = parseFloat(prompt(`Ingresa la calificación para ${materias[i]} (0-100):`));
            } while (isNaN(calificacion) || calificacion < 0 || calificacion > 100); // Validación simple
            
            if (!isNaN(calificacion)) {
                calificaciones.push(calificacion);
                calificacionesIngresadas = true; // Si se ingresa una calificación, se marca como ingresada
            }
        }

        // Verificar si se ingresaron calificaciones
        if (calificacionesIngresadas) {
            // Calcular la suma de las calificaciones
            suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
            promedio = suma / calificaciones.length;
            // Mostrar resultados en el div de "resultado"
            document.getElementById("resultado").textContent = `Suma: ${suma}\nPromedio: ${promedio.toFixed(2)}`;
        } else {
            // Si no se ingresaron calificaciones, mostrar un alert y limpiar el div de resultados
            alert("No se ingresaron calificaciones.");
        }
    }
});


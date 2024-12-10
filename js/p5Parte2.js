// **Parte 1: Calificaciones**
document.getElementById("mostrarPromedioBtn").addEventListener("click", function() {
    let calificaciones = [];
    let continuar = true;

    while (continuar) {
        let calificacion = prompt("Ingresa una calificación (0-100) o deja vacío para terminar:");

        if (calificacion === "") {
            continuar = false;
        } else {
            calificacion = parseFloat(calificacion);
            if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
                document.getElementById("promedioResult").innerHTML = "<h3>Por favor, ingresa una calificación válida entre 0 y 100.</h3>";
            } else {
                calificaciones.push(calificacion);
            }
        }
    }

    if (calificaciones.length > 0) {
        let suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
        let promedio = suma / calificaciones.length;

        // Usando .join() para mostrar las calificaciones
        alert("Las calificaciones ingresadas son: " + calificaciones.join(", "));

        document.getElementById("promedioResult").innerHTML = `<h3>Promedio: ${promedio.toFixed(2)}</h3>`;
    } else {
        document.getElementById("promedioResult").innerHTML = "<h3>No se ingresaron calificaciones.</h3>";
    }
});

// **Parte 2: Números**
document.getElementById("mostrarNumerosBtn").addEventListener("click", function() {
    let numeros = [];
    let continuar = true;

    while (continuar) {
        let numero = prompt("Ingresa un número o deja vacío para terminar:");

        if (numero === "") {
            continuar = false;
        } else {
            numero = parseFloat(numero);
            if (isNaN(numero)) {
                document.getElementById("numerosList").innerHTML = "<h3>Por favor, ingresa un número válido.</h3>";
            } else {
                numeros.push(numero);
            }
        }
    }

    if (numeros.length > 0) {
        let suma = numeros.reduce((total, numero) => total + numero, 0);

        // Usando .join() para mostrar los números
        alert("Los números ingresados son: " + numeros.join(", "));

        document.getElementById("numerosList").innerHTML = `<h3>Números ingresados: ${numeros.join(", ")}</h3>`;
        document.getElementById("sumaTotal").innerHTML = `<h3>Suma total: ${suma}</h3>`;
    } else {
        document.getElementById("numerosList").innerHTML = "<h3>No se ingresaron números.</h3>";
    }
});

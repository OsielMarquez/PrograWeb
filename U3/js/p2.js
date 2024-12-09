let nombre = prompt("¿Cúal es tu nombre?"); 
let edad = prompt("¿Cúal es su edad?");
let paisResiden = prompt("Cúal es su pais de residencia");


function saludo(nombre) {
    console.log("Hola, "+ nombre + "Ha sido registrado");
}
saludo(nombre);

let datosCorrec = confirm(

"¿Los datos están correctos?\n" + 
"Nombre: " + nombre + "\n" + 
"Edad: " + edad + "\n" + 
"País de residencia: " + paisResiden );

if (datosCorrec) {
 alert("Registro guardado correctamente: ");
} else{
    alert("Registros borrados");
}

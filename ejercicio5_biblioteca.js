"use strict";
// ======================================
// BIBLIOTECH
// Control de Préstamos de Libros
// ======================================
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
const multaDiaria = 1500;
const multaAdicional = 10000;
let cantidadUsuarios = parseInt(prompt("¿Cuántos usuarios harán devoluciones hoy? "));
let totalLibros = 0;
let librosConRetraso = 0;
let librosPuntuales = 0;
let totalMultas = 0;
if (isNaN(cantidadUsuarios) || cantidadUsuarios <= 0) {
    console.log("Cantidad inválida.");
}
else {
    for (let i = 1; i <= cantidadUsuarios; i++) {
        console.log("\n----------------------------------");
        let nombreUsuario = prompt("Nombre del usuario: ");
        let cantidadLibros;
        // Validar que no exceda 3 libros
        while (true) {
            cantidadLibros = parseInt(prompt("Cantidad de libros (máximo 3): "));
            if (cantidadLibros >= 1 && cantidadLibros <= 3) {
                break;
            }
            else {
                console.log("Solo se permiten entre 1 y 3 libros.");
            }
        }
        let multaUsuario = 0;
        console.log("\n--- USUARIO " + i + ": " + nombreUsuario + " ---");
        console.log("Libros devueltos: " + cantidadLibros);
        // Ciclo for anidado por cada libro
        for (let j = 1; j <= cantidadLibros; j++) {
            let diasPrestamo = parseInt(prompt("Libro " + j + " - Días de préstamo: "));
            let diasRetraso = 0;
            let multaLibro = 0;
            if (diasPrestamo > 7) {
                diasRetraso = diasPrestamo - 7;
            }
            // Calcular multa con if / else if / else
            if (diasRetraso === 0) {
                multaLibro = 0;
                librosPuntuales++;
            }
            else if (diasRetraso <= 15) {
                multaLibro = diasRetraso * multaDiaria;
                librosConRetraso++;
            }
            else {
                multaLibro = (diasRetraso * multaDiaria) + multaAdicional;
                librosConRetraso++;
            }
            console.log("Libro " + j + ": " +
                diasPrestamo + " días — " +
                (diasRetraso > 0 ? diasRetraso + " días de retraso" : "Sin retraso") +
                " — Multa: $" + multaLibro.toLocaleString());
            multaUsuario += multaLibro;
            totalLibros++;
        }
        totalMultas += multaUsuario;
        // Operador ternario para clasificar usuario
        let estadoUsuario = (multaUsuario === 0)
            ? "PUNTUAL"
            : "CON RETRASO";
        console.log("Multa total usuario: $" + multaUsuario.toLocaleString() + " — " + estadoUsuario);
    }
    // Resumen final
    console.log("\n=================================");
    console.log("=== RESUMEN BIBLIOTECH ===");
    console.log("Usuarios atendidos: " + cantidadUsuarios);
    console.log("Total libros: " + totalLibros);
    console.log("Libros puntuales: " + librosPuntuales);
    console.log("Libros con retraso: " + librosConRetraso);
    console.log("MULTAS RECAUDADAS: $" + totalMultas.toLocaleString());
    console.log("=================================");
}
//# sourceMappingURL=ejercicio5_biblioteca.js.map
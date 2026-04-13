"use strict";
// ===============================
// LAVANDERÍA EXPRESS
// Alquiler de Lavadoras
// ===============================
Object.defineProperty(exports, "__esModule", { value: true });
// Requiere instalar antes: npm install prompt-sync
const prompt = require("prompt-sync");
// Variables principales
let cantidadClientes = parseInt(prompt("¿Cuántos clientes va a registrar hoy? "));
const costoPorHora = 5000;
let acumuladorIngresos = 0;
let contadorDescuentos = 0;
// Validación básica
if (isNaN(cantidadClientes) || cantidadClientes <= 0) {
    console.log("Debe ingresar un número válido de clientes.");
}
else {
    //ciclo for para registrar
    //  cliente
    for (let i = 1; i <= cantidadClientes; i++) {
        console.log("\n-----------------------------------");
        console.log("CLIENTE #" + i);
        let nombreCliente = prompt("Ingrese el nombre del cliente: ");
        let horasAlquiler = parseInt(prompt("Ingrese la cantidad de horas de alquiler: "));
        if (isNaN(horasAlquiler) || horasAlquiler <= 0) {
            console.log("Horas inválidas. Se tomará como 0.");
            horasAlquiler = 0;
        }
        // Cálculo del costo
        let costoTotal = horasAlquiler * costoPorHora;
        let descuento = 0;
        let totalPagar = 0;
        // Aplicar descuento si corresponde
        if (horasAlquiler > 12) {
            descuento = costoTotal * 0.30;
            contadorDescuentos++;
        }
        else {
            descuento = 0;
        }
        totalPagar = costoTotal - descuento;
        // Operador ternario para mensaje
        let mensajeDescuento = (horasAlquiler > 12)
            ? "CON DESCUENTO"
            : "SIN DESCUENTO";
        // Mostrar información del cliente
        console.log("\n--- CLIENTE " + i + ": " + nombreCliente + " ---");
        console.log("Horas alquiladas: " + horasAlquiler);
        console.log("Subtotal: $" + costoTotal.toLocaleString());
        console.log("Descuento (30%): $" + descuento.toLocaleString() + " — " + mensajeDescuento);
        console.log("Total a pagar: $" + totalPagar.toLocaleString());
        // Acumulador de ingresos
        acumuladorIngresos += totalPagar;
    }
    // Resumen final
    console.log("\n===================================");
    console.log("=== RESUMEN DEL DÍA ===");
    console.log("Clientes atendidos: " + cantidadClientes);
    console.log("Ingreso total: $" + acumuladorIngresos.toLocaleString());
    console.log("Clientes con descuento: " + contadorDescuentos);
    console.log("===================================");
}
//# sourceMappingURL=ejercicio1_lavanderia.js.map
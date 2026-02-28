// ================================
// BURGER PALACE
// Sistema de Pedidos
// ================================

const prompt = require("prompt-sync")();

// Precios de combos
const precioCombo1 = 15000;
const precioCombo2 = 22000;
const precioCombo3 = 35000;

// Variables acumuladoras
let totalCuenta = 0;
let totalCombos = 0;

let contadorCombo1 = 0;
let contadorCombo2 = 0;
let contadorCombo3 = 0;

let opcion;

do {
    console.log("\n====== BURGER PALACE ======");
    console.log("1. Clásica — $15.000");
    console.log("2. Doble Poder — $22.000");
    console.log("3. Mega Fest — $35.000");
    console.log("4. Finalizar pedido");

    opcion = parseInt(prompt("Seleccione combo: "));

    if (opcion >= 1 && opcion <= 3) {

        let cantidadCombo = parseInt(prompt("Cantidad: "));

        if (isNaN(cantidadCombo) || cantidadCombo <= 0) {
            console.log("Cantidad inválida.");
        } else {

            let precioCombo;
            let nombreCombo;

            // if / else if / else para determinar combo
            if (opcion === 1) {
                precioCombo = precioCombo1;
                nombreCombo = "Clásica";
                contadorCombo1 += cantidadCombo;
            } else if (opcion === 2) {
                precioCombo = precioCombo2;
                nombreCombo = "Doble Poder";
                contadorCombo2 += cantidadCombo;
            } else {
                precioCombo = precioCombo3;
                nombreCombo = "Mega Fest";
                contadorCombo3 += cantidadCombo;
            }

            // Cálculo subtotal
            let subtotal = precioCombo * cantidadCombo;

            // Acumuladores
            totalCuenta += subtotal;
            totalCombos += cantidadCombo;

            console.log("\nCombo seleccionado: " + nombreCombo);
            console.log("Cantidad: " + cantidadCombo);
            console.log("Subtotal: $" + subtotal.toLocaleString());
            console.log("Total acumulado: $" + totalCuenta.toLocaleString());
        }

    } else if (opcion === 4) {
        console.log("\nFinalizando pedido...");
    } else {
        console.log("Opción no válida");
    }

} while (opcion !== 4);

// Resumen final
console.log("\n===============================");
console.log("=== CUENTA FINAL ===");
console.log("Combos Clásica: " + contadorCombo1);
console.log("Combos Doble Poder: " + contadorCombo2);
console.log("Combos Mega Fest: " + contadorCombo3);
console.log("Total combos: " + totalCombos);
console.log("TOTAL A PAGAR: $" + totalCuenta.toLocaleString());
console.log("===============================");
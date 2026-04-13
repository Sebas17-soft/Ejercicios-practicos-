"use strict";
// ======================================
// ALCALDÍA DE ARMENIA
// Subsidio al Adulto Mayor
// ======================================
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")();
const salarioMinimo = 1300000;
let cantidadPersonas = parseInt(prompt("¿Cuántas personas va a registrar? "));
let contBeneficiarios60_80 = 0;
let contBeneficiariosMayor80 = 0;
let contNoAplica = 0;
let presupuestoTotal = 0;
if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
    console.log("Debe ingresar una cantidad válida.");
}
else {
    for (let i = 1; i <= cantidadPersonas; i++) {
        console.log("\n----------------------------------");
        console.log("Registro de persona #" + i);
        let nombre = prompt("Nombre completo: ");
        let edad = parseInt(prompt("Edad: "));
        let porcentaje = 0;
        let subsidio = 0;
        let categoria = "No aplica";
        // Clasificación con if / else if / else
        if (edad >= 60 && edad <= 80) {
            porcentaje = 0.12;
            subsidio = salarioMinimo * porcentaje;
            categoria = "Adulto Mayor";
            contBeneficiarios60_80++;
            presupuestoTotal += subsidio;
        }
        else if (edad > 80) {
            porcentaje = 0.15;
            subsidio = salarioMinimo * porcentaje;
            categoria = "Adulto Mayor Senior";
            contBeneficiariosMayor80++;
            presupuestoTotal += subsidio;
        }
        else {
            contNoAplica++;
        }
        // Operador ternario para confirmar categoría
        let mensajeCategoria = (edad > 80)
            ? "Adulto Mayor Senior"
            : (edad >= 60 ? "Adulto Mayor" : "No aplica");
        console.log("\n--- PERSONA " + i + ": " + nombre + " ---");
        console.log("Edad: " + edad + " años");
        console.log("Categoría: " + mensajeCategoria);
        if (edad >= 60) {
            console.log("Porcentaje aplicado: " + (porcentaje * 100) + "%");
            console.log("Subsidio: $" + subsidio.toLocaleString());
        }
        else {
            console.log("No aplica al programa.");
        }
    }
    // Resumen final
    console.log("\n======================================");
    console.log("=== INFORME ALCALDÍA DE ARMENIA ===");
    console.log("Total registrados: " + cantidadPersonas);
    console.log("Beneficiarios (60-80 años): " + contBeneficiarios60_80);
    console.log("Beneficiarios (>80 años): " + contBeneficiariosMayor80);
    console.log("No aplican: " + contNoAplica);
    console.log("PRESUPUESTO TOTAL: $" + presupuestoTotal.toLocaleString());
    console.log("======================================");
}
//# sourceMappingURL=ejercicio3_alcaldia.js.map
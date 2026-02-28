// ======================================
// PARQUIFÁCIL
// Sistema de Parqueadero
// ======================================

const prompt = require("prompt-sync")();

let opcionMenu = 0;

let contMotos = 0;
let contCarros = 0;
let contCamionetas = 0;

let ingresoTotal = 0;
let sumaHoras = 0;
let totalVehiculos = 0;

while (opcionMenu !== 2) {

    console.log("\n====== PARQUIFÁCIL ======");
    console.log("1. Registrar vehículo");
    console.log("2. Cerrar jornada");

    opcionMenu = parseInt(prompt("Seleccione opción: "));

    if (opcionMenu === 1) {

        let tipoVehiculo = parseInt(prompt("Tipo de vehículo (1=Moto, 2=Carro, 3=Camioneta): "));
        let horasPermanencia = parseFloat(prompt("Horas de permanencia: "));

        let tarifaHora = 0;
        let nombreVehiculo = "";

        // Asignar tarifa según tipo
        if (tipoVehiculo === 1) {
            tarifaHora = 2000;
            nombreVehiculo = "Moto";
            contMotos++;
        } else if (tipoVehiculo === 2) {
            tarifaHora = 4000;
            nombreVehiculo = "Carro";
            contCarros++;
        } else if (tipoVehiculo === 3) {
            tarifaHora = 6000;
            nombreVehiculo = "Camioneta/SUV";
            contCamionetas++;
        } else {
            console.log("Tipo de vehículo no válido.");
            continue; // vuelve al menú
        }

        // Cálculo del costo
        let costoTotal = tarifaHora * horasPermanencia;
        let descuento = 0;

        if (horasPermanencia > 8) {
            descuento = costoTotal * 0.20;
        }

        let totalPagar = costoTotal - descuento;

        // Operador ternario
        let tipoTarifa = (horasPermanencia > 8)
            ? "TARIFA DÍA COMPLETO (20% desc.)"
            : "TARIFA POR HORAS";

        console.log("\n--- VEHÍCULO REGISTRADO ---");
        console.log("Tipo: " + nombreVehiculo);
        console.log("Horas: " + horasPermanencia);
        console.log("Subtotal: $" + costoTotal.toLocaleString());
        console.log("Descuento (20%): $" + descuento.toLocaleString() + " — " + tipoTarifa);
        console.log("Total a pagar: $" + totalPagar.toLocaleString());

        // Acumuladores
        ingresoTotal += totalPagar;
        sumaHoras += horasPermanencia;
        totalVehiculos++;

    } else if (opcionMenu === 2) {
        console.log("\nCerrando jornada...");
    } else {
        console.log("Opción no válida.");
    }
}

// Cálculo promedio
let promedioHoras = (totalVehiculos > 0) 
    ? (sumaHoras / totalVehiculos) 
    : 0;

// Cierre de jornada
console.log("\n===============================");
console.log("=== CIERRE DE JORNADA ===");
console.log("Motos: " + contMotos);
console.log("Carros: " + contCarros);
console.log("Camionetas: " + contCamionetas);
console.log("Total vehículos: " + totalVehiculos);
console.log("Ingreso total: $" + ingresoTotal.toLocaleString());
console.log("Promedio permanencia: " + promedioHoras.toFixed(2) + " horas");
console.log("===============================");
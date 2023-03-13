// Definición de la clase Operacion
class Operacion {
  constructor(id, moneda, fecha, valor, tazaDeCambio) {
    this.id = id;
    this.moneda = moneda;
    this.fecha = fecha;
    this.valor = valor;
    this.tazaDeCambio = tazaDeCambio;
  }

  calcular() {
    return this.valor * this.tazaDeCambio;
  }
}

// Creación del array de operaciones
const operaciones = [
  new Operacion(1, "USD", new Date("2023-03-10"), 100, 1),
  new Operacion(2, "EUR", new Date("2023-03-09"), 200, 1.1),
  new Operacion(3, "GBP", new Date("2023-03-08"), 300, 1.2),
  new Operacion(4, "USD", new Date("2023-03-07"), 400, 1),
  new Operacion(5, "JPY", new Date("2023-03-06"), 500, 0.009)
];

// Función para filtrar operaciones por moneda
function filtrarPorMoneda(operaciones, moneda) {
  return operaciones.filter(op => op.moneda === moneda);
}

// Función para calcular el total de las operaciones filtradas
function calcularTotal(operacionesFiltradas) {
  return operacionesFiltradas.reduce((total, op) => total + op.calcular(), 0);
}

// Capturar los datos del usuario
let nombre = prompt('Ingrese nombre').toUpperCase();
let apellido = prompt('Ingrese apellido').toUpperCase();

while (true) {
  let edad = prompt("Ingrese su edad:");
  if (edad === null) {
    alert("No se ingresó ninguna edad. Por favor, inténtelo nuevamente.");
  } else if (isNaN(edad)) {
    alert("El valor ingresado no es un número. Por favor, inténtelo nuevamente.");
  } else if (edad < 18) {
    alert("Lo siento, debe ser mayor de edad para ingresar.");
    continue;
  } else {
    alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' '+ 'Usted va a realizar una cotizacion de divisas en tiempo real.');
    break;
  }
}

// Solicitar la cotización a realizar
const COTIZACION_EURO = 400;
const cotizarEuro = (pesos) => pesos / COTIZACION_EURO;
const cotizarPesos = (euro) => euro * COTIZACION_EURO;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - EUROS A PESOS \n 2 -  PESOS A EUROS ");
let valor = prompt("VALOR");
switch (seleccion) {
  case "1":
    alert(cotizarPesos(valor));
    break;
  case "2":
    alert(cotizarEuro(valor));
    break;
  default:
    alert('Ha ingresado una divisa inexistente, vuelva a repetir el proceso')
    break;
}

// Filtrar y calcular las operaciones
const monedaFiltrada = prompt("Ingrese la moneda a filtrar:");
const operacionesFiltradas = filtrarPorMoneda(operaciones, monedaFiltrada);

















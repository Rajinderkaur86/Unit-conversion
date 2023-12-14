/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let button = document.getElementById("btn-el");
let inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
const feetToMeter = 0.305;
const gallonToLiter = 3.785;
const poundToKilo = 0.45;
button.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * meterToFeet
  ).toFixed(2)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    2
  )} meters`;

  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(2)} gallons | ${baseValue} gallons = ${(
    baseValue * gallonToLiter
  ).toFixed(2)} liters`;

  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kiloToPound
  ).toFixed(2)} pounds | ${baseValue} pounds = ${(
    baseValue * poundToKilo
  ).toFixed(2)} kilos`;
});

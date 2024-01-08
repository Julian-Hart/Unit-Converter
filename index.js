const lengthEl = document.getElementById("length-conversion-el");
const volumeEl = document.getElementById("volume-conversion-el");
const massEl = document.getElementById("mass-conversion-el");
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input");

convertBtn.addEventListener("click", function () {
  if (inputEl.value) {
    renderLength(inputEl.value);
    renderVolume(inputEl.value);
    renderMass(inputEl.value);
  }
});

function renderLength(num) {
  const numTofeet = (Number(num) * 3.281).toFixed(3);
  const numToMeter = (Number(num) / 3.281).toFixed(3);
  lengthEl.textContent = `${num} Meters = ${numTofeet} Feet | ${num} Feet = ${numToMeter} Meters`;
}

function renderVolume(num) {
  const numToLiters = (Number(num) / 0.264).toFixed(3);
  const numToGallons = (Number(num) * 0.264).toFixed(3);
  volumeEl.textContent = `${num} Gallons = ${numToLiters} Liters | ${num} Liters = ${numToGallons} Gallons`;
}

function renderMass(num) {
  const numToKilograms = (Number(num) * 2.204).toFixed(3);
  const numToPounds = (Number(num) / 2.204).toFixed(3);
  massEl.textContent = `${num} Pounds = ${numToKilograms} Kilograms | ${num} Kilograms = ${numToPounds} Pounds`;
}

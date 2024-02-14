let getal1 = parseInt(prompt("Geef de eerste getal."));
let getal2 = parseInt(prompt("Geef de tweede getal."));

document.getElementById('addition').innerHTML = "Optellen: " + (getal1 + getal2) + ".";
document.getElementById('subtraction').innerHTML = "Aftrekken: " + (getal1 - getal2) + '.';
document.getElementById('multiplication').innerHTML = "Vermenigvuldigen: " + (getal1 * getal2) + '.';
document.getElementById('division').innerHTML = "Delen: " + (getal1 / getal2) + '.';
let getal1 = parseFloat(prompt("Geef de eerste getal."));
let getal2 = parseFloat(prompt("Geef de tweede getal."));

let optellen = getal1 + getal2;
let aftrekken = getal1 - getal2;
let vermenigvuldigen = getal1 * getal2;
let delen = getal1 / getal2;

document.getElementById('addition').innerHTML = "Optellen: " + optellen + ".";
document.getElementById('subtraction').innerHTML = "Aftrekken: " + aftrekken + '.';
document.getElementById('multiplication').innerHTML = "Vermenigvuldigen: " + vermenigvuldigen + '.';
document.getElementById('division').innerHTML = "Delen: " + delen + '.';
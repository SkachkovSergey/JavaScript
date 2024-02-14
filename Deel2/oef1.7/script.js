let getal1 = parseInt(prompt("Geef de eerste getal."));
let getal2 = parseInt(prompt("Geef de tweede getal."));

const result = getal1 * getal2;

document.querySelector('p').innerHTML =
    "De uitkomst van vermenigvuldigen is: " + result + ".";
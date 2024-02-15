let getal1 = parseFloat(prompt('Geef de eerste getal.'));
let getal2 = parseFloat(prompt('Geef de tweede getal.'));

const som = getal1 + getal2;
const verschil = getal1 - getal2;
const maal = getal1 * getal2;
const deel = getal1 / getal2;
const modulo = getal1 % getal2;
const isGelijk = (getal1 === getal2)? 'Gelijk': 'Niet gelijk';

document.getElementById('plus').innerHTML = getal1 + ' + ' + getal2;
document.getElementById('minus').innerHTML = getal1 + ' - ' + getal2;
document.getElementById('maal').innerHTML = getal1 + ' * ' + getal2;
document.getElementById('deel').innerHTML = getal1 + ' / ' + getal2;
document.getElementById('rest').innerHTML = getal1 + ' % ' + getal2;
document.getElementById('gelijk').innerHTML = getal1 + ' = ' + getal2;

document.getElementById('optellen').innerHTML = som.toString();
document.getElementById('aftrekken').innerHTML = verschil.toString();
document.getElementById('vermenigvuldigen').innerHTML = maal.toString();
document.getElementById('delen').innerHTML = deel.toString();
document.getElementById('modulo').innerHTML = modulo.toString();
document.getElementById('isGelijk').innerHTML = isGelijk;
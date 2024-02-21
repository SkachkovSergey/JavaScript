let getal = parseInt(prompt('Geef nummer tussen 0 en 10'));

if(getal < 0 || getal > 10) {
    document.querySelector('p').innerHTML = 'Niet mogelijk';
}
else {
    document.querySelector('p').innerHTML = 'Nummer: ' + getal;
}







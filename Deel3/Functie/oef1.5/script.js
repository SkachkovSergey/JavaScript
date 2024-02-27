function zinSplitsen() {
    let zin = prompt('Geef een random zin in.');
    let aantalTekens = zin.length;
    let getal = parseInt(prompt('Geef een random getal tussen 0 en '
        + aantalTekens + ' in.'));
    if(getal < 0 || getal > aantalTekens) {
        alert('Error. Geef een getal tussen 0 en ' + aantalTekens + '.');
    }
    else {
        const arrayZin = zin.split('');//Array van de zin maken
        const oneArray = arrayZin.slice(0, getal);//Snijd een bepaalde aantal tekens uit
        const firstZin = oneArray.join('');//String van array terug maken
        alert(firstZin);
    }
}
zinSplitsen();
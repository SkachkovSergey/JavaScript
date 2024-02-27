function verwijderTeken() {
    let zin = prompt('Geef een random zin in.');
    let aantalTekens = zin.length;
    let getal = parseInt(prompt('Geef een random getal tussen 0 en '
        + aantalTekens + '.'));
    if(getal < 0 || getal > aantalTekens) {
        alert('Error. Geef een getal tussen 0 en ' + aantalTekens + '.');
    }
    else {
        const arrayZin = zin.split('');
        let splitsTeken = arrayZin[getal - 1];
        console.log(zin);
        console.log(splitsTeken);
        // let splitsTeken = arrayZin.splice(getal - 1, 1);
        // console.log(splitsTeken);
        let firstPart = arrayZin.slice(0, getal);
        firstPart.pop();//Verwijder splits teken
        let firstSentence = firstPart.join('');
        console.log(firstSentence);

        let secondPart = arrayZin.slice(getal, aantalTekens);
        let secondSentence = secondPart.join('');
        console.log(secondSentence);
    }
}
verwijderTeken();
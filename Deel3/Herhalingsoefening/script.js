let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
];

function toonMensenUitGenk() {
    let inwonersVanGenk = [];
    for(let i = 0; i < klanten.length; i++) {
        if(klanten[i].stad === 'Genk') {
            inwonersVanGenk.push(klanten[i]);
        }
    }
    console.table(inwonersVanGenk);
}
toonMensenUitGenk();

function lettersTellen() {
    let totaalAantalLetters = 0;
    for(let klant of klanten) {
        console.log('Aantal letters in ' + klant.naam + ' = ' + klant.naam.length + '.');
        totaalAantalLetters += klant.naam.length;
    }
    console.log('Totaal aantal letters is ' + totaalAantalLetters + '.');
}
lettersTellen();

function stadAanpassen() {
    for(let i = 0; i < klanten.length; i++){
        let newStad = 'Antwerpen';
        for(let y = 1; y <= i; y++) {
            newStad += ' - Antwerpen';
        }
        klanten[i].stad = newStad;//aanpassen de stad
        console.log(klanten[i].stad);
    }
}
stadAanpassen();

function voornamenPrinten() {
    let names = "";// for storing all names
    let lastName = "";//

    for (let name = 0; name < klanten.length; name++) {
        names += klanten[name].voornaam;// Add current name
        if(names.length % 2) {
            lastName = klanten[klanten.length - 1].voornaam.toUpperCase();// find last name and set it to uppercase
        }
    }

    names = names.substring(0, (names.length - lastName.length)) + lastName;//assemble the sentence

    console.log(names);
}
voornamenPrinten();

function getEveryObject() {
    let person = '<p>';
    for(let client of klanten) {
        person += client.voornaam + ' ' + client.naam + ' ' + client.stad + '<br>';
    }
    document.getElementById('box').innerHTML = person;
    document.querySelector('p').style.fontSize = '150%';
}
getEveryObject();



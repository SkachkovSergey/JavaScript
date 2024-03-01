let persoon = {
    voorNaam: 'Sergey',
    achterNaam: 'Skachkov',
    geboorteDatum: '18/10/1975',
    telefoonNummer: +32489552370,
    email: 'SergeySkatchkov@gmail.com',
    statuut: 'student',
    volleNaam: function () {return this.voorNaam + ' ' + this.achterNaam;}
}

function makeSentence() {
    let output = document.querySelector('div');
    output.innerHTML = 'Mijn naam is ' + persoon.volleNaam() + ' en ik geboren op ' + persoon.geboorteDatum + '.' +
        ' Mijn telefoon nummer is ' + persoon.telefoonNummer +
        ' en mijn e-mail is ' + persoon.email + ' en ik ben een ' + persoon.statuut + '.' +
        ' Via deze gegevens kan je mij altijd contacteren.';
}
makeSentence();

let persoon = {
    voorNaam: 'Sergey',
    achterNaam: 'Skachkov',
    geboorteDatum: '18/10/1975',
    email: 'SergeySkachkov@gmail.com'
}

function objectToevoegenEnWeergeven() {
    persoon.lengte = 185;
    persoon.gewicht = 96;
    persoon.leeftijd = 48;
    persoon.huidskleur = 'wit';
    persoon.oogkleur = 'blauw';
    let output = '';

    for(let key in persoon) {
        output += persoon[key] + '<br>';
    }
    let container = document.createElement('div');
    document.body.appendChild(container);

    document.querySelector('div').innerHTML = output;
}
objectToevoegenEnWeergeven();
let person = {
    voorNaam: 'Sergey',
    achterNaam: 'Skachkov',
    geboorteDatum: '18/10/1975',
    email: 'SergeySkachkov@gmail.com'
}

function objectToevoegenEnWeergeven() {
    person.lengte = 185;
    person.gewicht = 96;
    person.leeftijd = 48;
    person.huidskleur = 'wit';
    person.oogkleur = 'blauw';

    delete person["lengte"];
    delete person.gewicht;

    let output = '';

    for(let key in person) {
        output += person[key] + '<br>';
    }

    let container = document.createElement('div');
    document.body.appendChild(container);

    document.querySelector('div').innerHTML = output;

    let personArray = Object.values(person);

    console.log(personArray.join('\n'));
    console.log(typeof personArray);
}
objectToevoegenEnWeergeven();
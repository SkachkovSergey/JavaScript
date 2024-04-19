const url = 'http://localhost:3000/users';

document.getElementById('tonen-gebruikersButton').addEventListener('click', gebruikersTonen);

function gebruikersTonen() {

    if(document.getElementById('gebruikerList')) {
        document.getElementById('tonen').removeChild(document.getElementById('gebruikerList'));
    }
    fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let list = document.createElement('ol');
            document.getElementById('tonen').appendChild(list);
            list.id = 'gebruikerList';

            for(let counter = 0; counter < data.length; counter++) {
                let item = document.createElement('li');
                let itemText = document.createTextNode('Naam: ' + data[counter].name +
                ' Leeftijd: ' + data[counter].age + ' jaar.');
                item.appendChild(itemText);
                list.appendChild(item);
            }
        })
        .catch(error => console.error('Het is een fout opgetreden!', error));
}

document.getElementById('toevoegen-gebruikerButton').addEventListener('click', function() {
    addUser();
    gebruikersTonen();
});

function addUser() {
    let gebruikerNaam = document.getElementById('naamveld').value;
    let gebruikerLeeftijd = document.getElementById('ageVeld').value;
    let newUser = {name: gebruikerNaam, age: gebruikerLeeftijd};

    if(document.getElementById('nieuweGebruiker')) {
        document.getElementById('toevoegen').removeChild(document.getElementById('nieuweGebruiker'));
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            let para = document.createElement('p');
            let paraText = document.createTextNode('Het toevoegen van de nieuwe gebruiker is gelukt!');
            para.appendChild(paraText);
            document.getElementById('toevoegen').appendChild(para);
            para.id = 'nieuweGebruiker';
            para.style.color = '#007900';
        })
        .catch(error => console.error(`Het is een fout opgetreden bij het laden`, error));
}
let teller = 0;
function BoodschapToevoegen() {
    teller++;

    if(teller === 1) {
        let list = document.createElement('ul');
        document.body.appendChild(list);
        list.id = 'list';
    }

    let listItem = document.createElement('li');
    let listItemText = document.createTextNode(document.getElementById('userInput').value + ' - ');
    listItem.appendChild(listItemText);
    listItem.id = 'boodschap' + teller;
    document.getElementById('list').appendChild(listItem);

    let verwijderKnop = document.createElement('a');
    let verwijderText = document.createTextNode('Verwijderen');
    verwijderKnop.href = '#';
    verwijderKnop.appendChild(verwijderText);
    verwijderKnop.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    document.getElementById('boodschap' + teller).appendChild(verwijderKnop);
}

document.getElementsByTagName('button')[0].addEventListener('click', BoodschapToevoegen);
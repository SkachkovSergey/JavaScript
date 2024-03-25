let list = document.createElement('ul');
list.id = 'boodschappenLijst';

document.body.appendChild(list);

document.getElementsByTagName('button')[0].addEventListener('click', addItem);

function addItem() {
    let newUserInput = document.getElementById('userInput').value.trim();

    if(newUserInput !== '') {
        let listItem = document.createElement('li');
        let listItemText = document.createTextNode(newUserInput);
        //listItem.style.listStyleType = 'none';
        listItem.style.marginTop = '15px';
        listItem.appendChild(listItemText);

        let verwijderButton = document.createElement('button');
        let buttonContent = document.createTextNode('Verwijderen');
        verwijderButton.style.background = "#ff0000";
        verwijderButton.style.cursor = 'pointer';
        verwijderButton.style.fontWeight = 'bold';
        verwijderButton.style.marginLeft = '20px';
        verwijderButton.appendChild(buttonContent);
        verwijderButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        listItem.appendChild(verwijderButton);

        list.appendChild(listItem);

        document.getElementById('userInput').value = '';
    }
}
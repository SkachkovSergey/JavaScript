const honden = ['Labrador Retriever',
    'German Shepherd',
    'Golden Retriever',
    'Rottweiler',
    'Beagle',
    'French Bulldog',
    'Yorkshire Terrier',
    'Boxer',
    'Siberian Husky',
    'Doberman'];

let number = prompt('Geef een nummer tussen 1 en 10.');

let container = document.createElement('div');
document.body.appendChild(container);

if(number !== null) {
    number = parseInt(number);
    if(!isNaN(number)) {
        if(number < 0 || number > 10){
            document.querySelector('div').innerHTML = 'Sorry, katten niet toegelaten.';
        }
        else{
            document.querySelector('div').innerHTML = honden[number - 1];
        }
    }
    else{
        alert('Geef een nummer');
    }
}
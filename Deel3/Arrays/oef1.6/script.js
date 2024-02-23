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

honden.shift();
honden.pop();

let container = document.createElement('div');
document.body.appendChild(container);

const ras = document.querySelector('div');
ras.innerHTML = '';

for(let i = 0; i < honden.length; i++){
    console.log(honden[i]);

    ras.innerHTML += honden[i];
    ras.innerHTML += '<br>';
}

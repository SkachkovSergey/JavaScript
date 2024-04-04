const firstPara = document.getElementsByTagName('p')[0];
const secondPara = document.getElementsByTagName('p')[1];
const thirdPara = document.getElementsByTagName('p')[2];

let firstText = document.createTextNode('Om de tekst beter te zien kun je deze vergroten door op de knop "Groter" te klikken.');
let secondText = document.createTextNode('De knop "Kleiner" maakt de font size kleiner. Zo bespaart u een ruimte in de website!');
let thirdText = document.createTextNode('Kies wat je best past!');

firstPara.appendChild(firstText);
secondPara.appendChild(secondText);
thirdPara.appendChild(thirdText);

document.body.insertBefore(document.getElementsByTagName('h1')[0], firstPara);
document.body.insertBefore(document.getElementsByTagName('p')[0], secondPara);
document.body.insertBefore(document.getElementsByTagName('p')[1], thirdPara);

document.getElementsByTagName('button')[0].addEventListener('click', textGroter);
document.querySelectorAll('button')[1].addEventListener('click', textKleiner);

let aantalParagrafen = document.getElementsByTagName('p').length;
let aantalHeadings = document.getElementsByTagName('h1').length;

function textGroter() {
    for(let teller = 0; teller < aantalParagrafen; teller++) {
        document.getElementsByTagName('p')[teller].style.fontSize = '24px';
    }
    for(let teller = 0; teller < aantalHeadings; teller++) {
        document.getElementsByTagName('h1')[teller].style.fontSize = '48px';
    }
}

function textKleiner() {
    for(let teller = 0; teller < aantalParagrafen; teller++) {
        document.getElementsByTagName('p')[teller].style.fontSize = '14px';
    }
    for(let teller = 0; teller < aantalHeadings; teller++) {
        document.getElementsByTagName('h1')[teller].style.fontSize = '22px';
    }
}
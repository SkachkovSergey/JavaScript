let heading = document.createElement('h1');
let headingText = document.createTextNode('De tekst groter en kleiner maken.');
heading.appendChild(headingText);


let firstPara = document.createElement('p');
let secondPara = document.createElement('p');
let thirdPara = document.createElement('p');

let firstText = document.createTextNode('Om de tekst beter te zien kun je deze vergroten door op de knop "Groter" te klikken.');
let secondText = document.createTextNode('De knop "Kleiner" maakt de font size kleiner. Zo bespaart u een ruimte in de website!');
let thirdText = document.createTextNode('Kies wat je best past!');

firstPara.appendChild(firstText);
secondPara.appendChild(secondText);
thirdPara.appendChild(thirdText);


let zoomButton = document.createElement('button');
let reductionButton = document.createElement('button');

let contentZoomButton = document.createTextNode('Groter');
let contentReductionButton = document.createTextNode('Kleiner');

zoomButton.appendChild(contentZoomButton);
reductionButton.appendChild(contentReductionButton);
zoomButton.style.margin = '5px';
reductionButton.style.margin = '5px';
zoomButton.id = 'groter';
reductionButton.id = 'kleiner';

document.body.appendChild(heading);
document.body.appendChild(zoomButton);
document.body.appendChild(reductionButton);

document.body.insertBefore(firstPara, zoomButton);
document.body.insertBefore(secondPara, zoomButton);
document.body.insertBefore(thirdPara, zoomButton);


function textGroterMaken() {
    heading.style.fontSize = '48px';
    firstPara.style.fontSize = '24px';
    secondPara.style.fontSize = '24px';
    thirdPara.style.fontSize = '24px';
}

document.getElementById('groter').addEventListener('click', textGroterMaken);
document.getElementById('kleiner').addEventListener('click', textKleinerMaken);

function textKleinerMaken() {
    heading.style.fontSize = '22px';
    firstPara.style.fontSize = '14px';
    secondPara.style.fontSize = '14px';
    thirdPara.style.fontSize = '14px';
}
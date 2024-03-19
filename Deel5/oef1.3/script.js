let teller = 0;

function toonDeZin() {
    teller++;
    let textArea = document.getElementById('textArea').value;
    let paragraaf = document.createElement('p');
    let paraText = document.createTextNode(textArea + ' ' +  (teller + 12));
    paragraaf.appendChild(paraText);
    document.body.appendChild(paragraaf);

    if(teller > 1) {
        paragraaf.style.color = '#ff0000';
        let font = 20 + teller;
        paragraaf.style.fontSize = font.toString()+'px';
        paragraaf.style.fontWeight = 'bold';
    }
}

document.querySelector('button').addEventListener('click', toonDeZin);
document.querySelectorAll('button')[1].addEventListener('click', wissen);

function wissen() {
    let paragraphs = document.querySelectorAll('p');

    for(let paragraaf of paragraphs) {
        paragraaf.remove();
    }

    teller = 0;
}
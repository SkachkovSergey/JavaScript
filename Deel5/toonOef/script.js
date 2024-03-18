let teller = 0;
document.getElementById('knop').addEventListener('click', addParagraaf);

function addParagraaf() {
    if(teller === 0) {
        teller++;
        let paragraaf = document.createElement('p');
        let paragraafText = document.createTextNode('Je hebt op de knop geklikt!');
        paragraaf.appendChild(paragraafText);
        document.getElementsByTagName('body')[0].appendChild(paragraaf);
        paragraaf.id = 'text';
    }
    else {
        teller++;
        document.getElementById('text').innerHTML = 'Je hebt ' + teller + ' keer op de knop geklikt!';
    }
}
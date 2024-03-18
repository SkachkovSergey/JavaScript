
function toonInParagraaf() {
    let text = document.querySelector('textarea').value;
    let paragraaf = document.getElementById('output');
    paragraaf.innerHTML = text;
}

document.querySelector('button').addEventListener('click', toonInParagraaf);
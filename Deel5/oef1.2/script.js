function toonResult() {
    let text = document.getElementById('textArea').value;
    let paragraaf = document.createElement('p');
    let paraText = document.createTextNode(text);
    paragraaf.appendChild(paraText);

    document.body.appendChild(paragraaf);
}

document.getElementById('button').addEventListener('click', toonResult);
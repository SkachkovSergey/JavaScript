function isVijftig() {
    let getal1 = parseInt(prompt('Geef je eerste getal van 0 tot 100.'));
    let getal2 = parseInt(prompt('Geef je de tweede getal van 0 tot 100.'));

        if(getal1 >= 0 || getal1 <= 100 && getal2 >= 0 || getal2 <= 100) {
            if(getal1 === 50 || getal2 === 50 || getal1 + getal2 === 50) {
                document.getElementById('output').innerHTML = 'Hoera, vijftig.';
            }
        }
        else {
            alert('Geef getal tussen 0 en 100!');
        }

}
isVijftig();
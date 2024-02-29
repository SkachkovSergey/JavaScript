function alleWoordenStartenMetHoofdLetter() {
    let zin = 'Deze oefeningen zijn heel leuk.';
    const arraySentence = zin.split(' ');
    console.log(arraySentence);//
    console.log(arraySentence.join());//

    let container = document.createElement('div');//create container
    document.body.appendChild(container);//adding container to body

    let output = document.querySelector('div');//Capture container
    output.innerHTML = '';//Initializing container


    for(let i = 0; i < arraySentence.length; i++){

        // console.log(arraySentence[i][0].toUpperCase() + arraySentence[i].slice(1));

        output.innerHTML += arraySentence[i][0].toUpperCase() + arraySentence[i].slice(1) + ' ';//Adding capital letters
        //output.innerHTML += ' ';//Splitsing array
    }

    let persoon = {voornaam: 'Natalia', naam: 'Skachkova', beroep: 'Huisvrouw'};
    persoon.nationaliteit = 'Belg';
    let result = '';
    for(let properties in persoon) {
        result += persoon[properties] + '<br> ';
    }
    document.getElementById('tekst').innerHTML = result;
}
alleWoordenStartenMetHoofdLetter();
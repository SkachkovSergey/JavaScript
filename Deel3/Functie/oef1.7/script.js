function alleWoordenStartenMetHoofdLetter() {
    let zin = 'Deze oefeningen zijn heel leuk.';
    const arraySentence = zin.split(' ');
    console.log(arraySentence);//

    let container = document.createElement('div');
    document.body.appendChild(container);

    let output = document.querySelector('div');
    output.innerHTML = '';


    for(let i = 0; i < arraySentence.length; i++){

        // console.log(arraySentence[i][0].toUpperCase() + arraySentence[i].slice(1));

        output.innerHTML += arraySentence[i][0].toUpperCase() + arraySentence[i].slice(1);
        output.innerHTML += ' ';
    }
}
alleWoordenStartenMetHoofdLetter();
const aantalLijnen = 7;
let lijn = document.getElementById('container');//we leggen item vast (item capture)
lijn.innerText = '';//initialise

for (let i = 1; i <= aantalLijnen; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += ' # ';
    }
    console.log(row);
    row += '<br>';
    lijn.innerHTML += row;//override each row
}


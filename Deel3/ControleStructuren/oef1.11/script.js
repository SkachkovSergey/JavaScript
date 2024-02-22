let aantalLijnen = parseInt(prompt('Geef de hoogte van driehoek tussen 0 en 10.'));
let lijn = document.getElementById('container');
lijn.innerText = '';

if(aantalLijnen !== null){
    aantalLijnen = parseInt(aantalLijnen);
    if(!isNaN(aantalLijnen)){
        if(aantalLijnen < 0 || aantalLijnen > 10){
            document.getElementById('container').innerHTML = 'Niet mogelijk';
        }
        else{
            for(let i = 1; i <= aantalLijnen; i++){
                let row = '';
                for(let j = 1; j <= i; j++){
                    row += ' * ';
                }
                row += '<br>';
                lijn.innerHTML += row;
            }
        }
    }
    else{
        document.getElementById('container').innerHTML = ('Geef een nummer');
    }
}

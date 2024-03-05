function telDeKlinkers() {
    let teller = 0;
    let zin = prompt('Geef een random zin in.');
    let joinedZin = zin.split(' ').join('').toLowerCase().slice(0, -1);
    for(let letter of joinedZin) {
        if(letter === 'a'|| letter === 'e' || letter === 'u' || letter === 'i' || letter === 'o') {
            teller++;
        }
    }
    console.log(joinedZin);
    alert('Er zijn ' + teller + ' klinkers in de zin.');
}
telDeKlinkers();
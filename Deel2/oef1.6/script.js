let zin = prompt('Geef een random zin in.');
let aantal = zin.indexOf(' ') + 1;
console.log(typeof aantal);//number

alert('De eerste spatie van de zin is: ' + aantal + '.');
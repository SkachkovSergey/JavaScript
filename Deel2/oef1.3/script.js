const zin = 'Ik wil een koekje.';

let result;

result = zin.charAt(0);// I
console.log(result);

result = zin.charAt(3);// w
console.log(result);

result = zin.lastIndexOf('k');// 14
console.log(result);

result = zin.lastIndexOf('e');// 16
console.log(result);

result = zin.length;// 18
console.log('Aantal tekens in de zin is ' + result + ' tekens.');

const zin1 = 'Ik wil een koekje.';
const zin2 = 'lasagna uit PXL - catering.';

let eersteZin = zin1.substring(0, 11);

let volleZin = eersteZin + zin2;

document.querySelector('p').innerHTML = volleZin.toUpperCase();
console.log(volleZin.toUpperCase());
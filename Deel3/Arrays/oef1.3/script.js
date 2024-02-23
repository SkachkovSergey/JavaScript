const opleidingen = ['Electronica-ICT', 'Toegepaste Informatica',
    'Programmeren', 'Digitale vormgeving', 'Internet en things',
    'System- en Netwerkbeheer'];

let lijn =  document.querySelector('div');
lijn.innerHTML = '';

lijn.innerHTML = String(opleidingen.join('<br>'));
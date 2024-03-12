//part1
document.getElementById('red').style.color = 'darkred';


//part2
const parentElement = document.getElementById('main');
//const childElement = parentElement.querySelectorAll('p')[3];
const lastElement = document.getElementById('weg');
//const forthElement = parentElement.children[4];

//parentElement.removeChild(childElement);
parentElement.removeChild(lastElement);
//parentElement.removeChild(forthElement);


//part3
const headerElement = document.createElement('h1'); // create element
const headerText = document.createTextNode('Welcome PendiX'); // create textNode

headerElement.appendChild(headerText); // insert textNode
headerElement.style.color = '#f00'; // change the color

document.getElementById('header').appendChild(headerElement); // add to the element


//part4
const aside = document.createElement('p');
const asideText = document.createTextNode('Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt');

aside.appendChild(asideText);
let main = document.getElementById('main');
main.insertBefore(aside, document.getElementById('weg'));
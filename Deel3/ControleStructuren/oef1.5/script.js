const rightNumber = 50;

let userInput = parseInt(prompt('Enter your random number'));

if(userInput > rightNumber) {
    document.querySelector('p').innerHTML = 'Te hoog!';
}
else if(userInput < rightNumber) {
    document.querySelector('p').innerHTML = 'Te laag!';
}
else if(userInput === rightNumber) {
    document.querySelector('p').innerHTML = 'Proficiat, goed gegokt!';
}
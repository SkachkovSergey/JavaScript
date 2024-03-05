function grootsteGetal() {
    let userInput;
    let largestNumber = 0;

    while(true) {
        userInput = prompt('Geef een random getal of type \"stop\" in.');

        if(userInput.toLowerCase() === 'stop') {
            break;
        }

        let number = parseInt(userInput);

        if(number > largestNumber) {
            largestNumber = number;
        }
    }
    console.log('Grootste getal is ' + largestNumber + '.');
}
grootsteGetal();
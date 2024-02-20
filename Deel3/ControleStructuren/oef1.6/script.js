let userInput = prompt('Sport je graag?');
let result;

switch (userInput.toUpperCase()) {
    case "JA":
        result = 'Just do it!';
        break;
    case "NEE":
    case "NEEN":
        result = 'Jammer, blijf maar liggen.';
        break;
    default:
        result = 'Dat was niet duidelijk, antwoord je vanuit je lui zetel?'
}
document.querySelector('p').innerHTML = result;
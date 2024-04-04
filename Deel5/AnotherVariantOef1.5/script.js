document.querySelector('table tr td:first-child').addEventListener('click', veranderCelEen);
document.querySelector('table tr td:last-child').addEventListener('click', veranderCelTwee);

function veranderCelEen() {
    document.querySelector('table tr td:first-child').innerHTML = 'Dit is een quote';
    document.querySelector('table tr td:first-child').style.background = 'red';
}

function veranderCelTwee() {
    document.querySelector('table tr td:last-child').innerHTML = 'Dit is nog een quote';
    document.querySelector('table tr td:last-child').style.background = 'green';
}
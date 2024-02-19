let uur = new Date().getHours();
let minutes = new Date().getMinutes();

uur = uur < 10? '0' + uur: uur;
minutes = minutes < 10? '0' + minutes: minutes;

if(uur > 7 && uur < 12) {
    document.getElementById('greet').innerText = 'Goede morgen!';
}
else if(uur > 12 && uur < 18) {
    document.getElementById('greet').innerText = 'Goede dag!';
}
else {
    document.getElementById('greet').innerHTML = 'Goede avond!';
}
document.getElementById('time').innerHTML = String(uur) + ':' + String(minutes);
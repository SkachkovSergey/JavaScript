/*let uitkomst = '';
for(let teller = 0; teller < 10; teller++)
{
     uitkomst = uitkomst + "<br>De teller staat op " + teller + ".";
}

document.querySelector('p').innerHTML = uitkomst;*/

let uur = new Date().getHours();
let minute = new Date().getMinutes();

document.querySelector('p').innerHTML = 'Het is ' + String(uur) + ' uur '
    + String(minute) + ' minutes.';

if(uur < 12) {
     document.getElementById('dagDeel').innerHTML = 'Goede voormiddag.';
}
else {
     document.getElementById('dagDeel').innerHTML = 'Goede namiddag.';
}
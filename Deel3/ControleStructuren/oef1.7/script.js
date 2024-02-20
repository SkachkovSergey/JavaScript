let currentDate = new Date();

let currentMonth = currentDate.getMonth();
const months = ['January', 'February', 'Match', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

let month = months[currentMonth];

document.querySelector('p').innerHTML = 'Het is de maand ' + month + '.';
let date = new Date();
let currentDay = date.getDay();
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let fullDate = '';

const daysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for(let day = 1; day <= daysPerMonth[currentMonth]; day++){
    let datum = new Date(currentYear, currentMonth, day);
    let dayOfTheWeek = datum.getDay();
    fullDate += daysOfTheWeek[dayOfTheWeek] + ', ' + day + '/' + (currentMonth + 1) + '/' + currentYear + '<br>';
}
console.log(daysOfTheWeek[currentDay] + ', ' + currentDate + '/' + (currentMonth + 1) + '/' + currentYear);

let container = document.createElement('div');
document.body.appendChild(container);

let output = document.querySelector('div');
output.innerHTML = fullDate;

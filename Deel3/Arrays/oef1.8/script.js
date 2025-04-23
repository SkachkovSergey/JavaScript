let date = new Date();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();
let result = '';

const daysPerMonthsOfYear = new Array(12);
daysPerMonthsOfYear[1] = 31;
daysPerMonthsOfYear[2] = 29;
daysPerMonthsOfYear[3] = 31;
daysPerMonthsOfYear[4] = 30;
daysPerMonthsOfYear[5] = 31;
daysPerMonthsOfYear[6] = 30;
daysPerMonthsOfYear[7] = 31;
daysPerMonthsOfYear[8] = 31;
daysPerMonthsOfYear[9] = 30;
daysPerMonthsOfYear[10] = 31;
daysPerMonthsOfYear[11] = 30;
daysPerMonthsOfYear[12] = 31;

const daysOfWeek = ['Zondag','Maandag', 'Dinsdag', 'Woensdag', 'Donderdag',
    'Vrijdag', 'Zaterdag'];

for(let day = 1; day <= daysPerMonthsOfYear[currentMonth]; day++) {
    let datum = new Date(currentYear, currentMonth - 1, day);
    let dayOfTheWeek = datum.getDay();
    result += daysOfWeek[dayOfTheWeek] + ', ' + day + '/' + 0 + currentMonth + '/' + currentYear + '<br>';
}

console.log(result);
//document.getElementById('output').innerHTML = result;


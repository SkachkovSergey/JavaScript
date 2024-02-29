let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dayOfWeek = date.getDay();
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

for(let nummer = 1; nummer <= daysPerMonthsOfYear[month]; nummer++){
    let date = new Date(year, month - 1 , nummer);
    let dayOfWeek = date.getDay();
    result += daysOfWeek[dayOfWeek] + ', ' + nummer + ' /' + month + ' / ' + year + '<br>';
}
document.getElementById('output').innerHTML = result;

console.log(daysOfWeek[dayOfWeek] + ' , ' + day + '/' + month + '/' + year);


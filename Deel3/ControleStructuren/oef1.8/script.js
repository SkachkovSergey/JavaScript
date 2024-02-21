let currentDate = new Date();

let currentDay;//assigns the days of the week
let currentTimeOfDay = currentDate.getHours();//it returns the number of hour
let timeOfDay;//assigns Goedemorgen, Goededag and Goedenacht

switch (currentDate.getDay()){
    case 0:
        currentDay = 'Zondag';
        break;
    case 1:
        currentDay = 'Maandag';
        break;
    case 2:
        currentDay = 'Dinsdag';
        break;
    case 3:
        currentDay = 'Woensdag';
        break;
    case 4:
        currentDay = 'Donderdag';
        break;
    case 5:
        currentDay = 'Vrijdag';
        break;
    case 6:
        currentDay = 'Zaterdag';
}

if(currentTimeOfDay > 7 && currentTimeOfDay < 12 ) {
    timeOfDay = 'Goedemorgen';
}
else if(currentTimeOfDay > 12 && currentTimeOfDay < 18) {
    timeOfDay = 'Goede dag';
}
else {
    timeOfDay = 'Goede nacht';
}

document.querySelector('p').innerHTML = timeOfDay + '. ' + 'Vandaag is ' + currentDay + '.';


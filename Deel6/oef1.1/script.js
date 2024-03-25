const apiKey = 'f6c22f5827e2dcb75e94b7aef31bc178';
let lat = '50.7504548';
let lon = '5.0830121';
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log('Locatie ' + data.name + '.')
            console.log(`De temperatuur is ${data.main.temp}`)
            console.log(`De vochtigheid is ${data.main.humidity} %.`)
            console.log('De windsnelheid ' + data.wind.speed + ' m/s.')


            let locatie = document.createElement('p');
            let temp = document.createElement('p');
            let humidity = document.createElement('p');
            let windSpeed = document.createElement('p');

            let locatieValue = document.createTextNode('Locatie ' + data.name + '.');
            let tempValue = document.createTextNode('Het buitenluchttemperatuur is ' +
                data.main.temp + ' in Kelvin graden.');
            let humidityValue = document.createTextNode('De vochtigheid is '
                + data.main.humidity  + ' %.');
            let windSpeedValue = document.createTextNode('De windsnelheid is '
                + data.wind.speed + ' meter per second.');

            locatie.appendChild(locatieValue);
            temp.appendChild(tempValue);
            humidity.appendChild(humidityValue);
            windSpeed.appendChild(windSpeedValue);

            document.body.appendChild(locatie);
            document.body.appendChild(temp);
            document.body.appendChild(humidity);
            document.body.appendChild(windSpeed);

        })
        .catch(error => console.log(error));
}

// const button = document.createElement('button');
// const buttonText = document.createTextNode('Toon het weer');
// button.appendChild(buttonText);
// button.id = 'button';
//
// document.body.appendChild(button);
//
// document.getElementById('button').addEventListener('click', getWeather);


getWeather('Hasselt');
const buttonHuidigeLocatie = document.createElement('button');
const buttonHuidigeLocatieText = document.createTextNode('Het weer in huidige locatie');
buttonHuidigeLocatie.style.margin = '10px';
buttonHuidigeLocatie.style.background = '#ff00ff';
buttonHuidigeLocatie.id = 'buttonLocatie';
buttonHuidigeLocatie.appendChild(buttonHuidigeLocatieText);
document.getElementsByTagName('body')[0].appendChild(buttonHuidigeLocatie);

const buttonMoscow = document.createElement('button');
const buttonMoscowText = document.createTextNode('Het weer in Moscow');
buttonMoscow.style.margin = '10px';
buttonMoscow.appendChild(buttonMoscowText);
document.getElementsByTagName('body')[0].appendChild(buttonMoscow);

const locatie = document.createElement('p');
locatie.id = 'locatie';
document.body.appendChild(locatie);

const place = document.createElement('h1');
place.id = 'place';
document.body.appendChild(place);

const temp = document.createElement('p');
temp.id = 'temperatuur';
document.getElementsByTagName('body')[0].appendChild(temp);

const humidity = document.createElement('p');
humidity.id = 'vochtigheid';
document.body.appendChild(humidity);


const wind = document.createElement('p');
wind.id = 'snelheidWind';
document.body.appendChild(wind);

const huidigePosition = document.getElementById('locatie');

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        huidigePosition.innerHTML = 'Geolocation is not supported by this browser';
    }
}

document.querySelector('button').addEventListener('click', getLocation);
document.querySelectorAll('button')[1].addEventListener('click', getWeatherMoscow);

function getWeatherMoscow() {
    let lat = 55.751244;
    let lon = 37.618423;
    getWeather(lat, lon);
}

function showPosition(position) {
    // const locatieText = document.createTextNode('Latitude: ' + position.coords.latitude +
    //     '  Longitude: ' + position.coords.longitude);
    // locatie.appendChild(locatieText);
    getWeather(position.coords.latitude, position.coords.longitude);
}

const apiKey = 'f6c22f5827e2dcb75e94b7aef31bc178';

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=nl
    &appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('place').innerHTML =
                `Locatie ${data.name}.`;
            document.getElementById('temperatuur').innerHTML =
                `De temperatuur is ${data.main.temp} Celsius.`;
            document.getElementById('vochtigheid').innerHTML =
                `De vochtigheid is ${data.main.humidity} %.`;
            document.getElementById('snelheidWind').innerHTML =
                `De windsnelheid is ${data.wind.speed} m/s.`;
        })
        .catch(error => console.error('Het is een fout opgetreden bij het laden', error));
}
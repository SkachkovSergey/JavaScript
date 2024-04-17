


const x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}




function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeather(lat, lon);
}


getLocation();

const apiKey = 'f6c22f5827e2dcb75e94b7aef31bc178';
//let lat = '50.7504548';
//let lon = '5.0830121';
function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=nl
    &appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(typeof(lat));
            console.log(lon);
            document.getElementById('locatie').innerHTML =
                `Locatie ${data.name}.`;
            document.getElementById('temperatuur').innerHTML =
                `De temperatuur is ${data.main.temp} Celsius.`;
            document.getElementById('humidity').innerHTML =
                `De vochtigheid is ${data.main.humidity} %.`;
            let windPara = document.createElement('p');
            let windText = document.createTextNode(`De windsnelheid is ${data.wind.speed} m/s.`);
            windPara.appendChild(windText);
            document.body.appendChild(windPara);
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



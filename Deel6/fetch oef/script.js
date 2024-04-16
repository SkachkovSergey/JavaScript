// fetch('https://randomuser.me/api')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// fetch('https://randomuser.me/api')
//     .then(function(response) {
//     return response.json()
// })
//     .then(function (data) {
//     console.log(data);
// })
//     .catch(function (error) {
//     console.log(error);
// });
//
document.getElementById('ophalen').addEventListener('click', getRandomUser);

function getRandomUser() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(function(data) {
            document.getElementById('name').innerHTML =
                data.results[0].name.first + ' ' + data.results[0].name.last
            document.getElementById('email').innerHTML =
            data.results[0].location.country
            document.getElementById('foto').src = data.results[0].picture.large;
            console.log(data);
        })
        .catch(error => console.log(error));


    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {"Content-type": "application/json; charset=UTF-8"},
    //     body: JSON.stringify({
    //             title: "Dit is de titel van mijn post",
    //             body: "Dit is de inhoud van mijn post",
    //             userId: 1})
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
}
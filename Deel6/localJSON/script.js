//let apiUrl = 'http://localhost:3000/users';

//const newGebruiker = {name: 'Natalia Skachkova'};


// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newGebruiker)
// })
// .then(response => {
//     if(!response.ok){
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Added user: ', data)
// })
// .catch(error => console.error('Het is een fout opgetreden', error));



//const userId = 1;
const apiUrl = `http://localhost:3000/users`;
fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error(`Http error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(`Gebruikersgegevens: `, data))
    .catch(error => console.error('Het is een fout opgetreden bij het laden', error));

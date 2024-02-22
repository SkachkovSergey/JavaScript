let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let birthYear = prompt('Enter your birth year');

if(birthYear !== null){
    birthYear = parseInt(birthYear);
    if(!isNaN(birthYear)){
        let age;
        age = currentYear - birthYear;

        if(age > 20){
            alert('Je bent oud genoeg om de informatie op deze website te bekijken.');
        }
        else{
            alert('Je mag nog niet binnen');
        }
        console.log(age);
    }
    else {
        alert('Enter the four numbers');
    }
}
let persoon = {
    firstName: 'Sergey',
    lastName: 'Skachkov',
    phoneNumber: +32489552370,
    birthDate: '18/10/1975',
    email: 'SergeySkachkov@gmail.com',
    status: 'student'
}

function makeTable(obj){
    let table = '<table>';

    for(let key in obj) {
        console.log(obj[key]);
        table += '<tr>';
        table += '<th>' + key + '</th>';//keys
        table += '<td>' + obj[key] + '</td>';//values
        table += '</tr>';
    }
    table += '</table>';
    document.querySelector('div').innerHTML = table;
}

makeTable(persoon);
// let output = '';
//
// for(let value in persoon) {
//     console.log(persoon[value]);
//     output += persoon[value] + '  ';
// }
// document.querySelector('td').innerHTML = output;


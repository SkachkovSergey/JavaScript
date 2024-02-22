for(let i = 1; i <= 7; i++){
    let row = '';
    for(let j = 1; j <= 7 - i; j++){
        row += '   ';
    }
    for(let k = 1; k <= i; k++){
        row += ' # ';
    }
    console.log(row);
}
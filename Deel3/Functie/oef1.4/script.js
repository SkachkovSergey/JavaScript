function startMetHello() {
    let zin = prompt('Geef een random zin in.');
    if(zin.startsWith('Hello')) {
       console.log(zin);
    }
    else {
        let lowerCaseZin = zin.charAt(0).toLowerCase() + zin.slice(1);
        const arrayZin = lowerCaseZin.split(' ');
        arrayZin.unshift('Hello, ');
        let myZin = arrayZin.join(' ');
        console.log(myZin);
    }
}
startMetHello();
let vraag = prompt('Sport je graag?', 'Ja, Nee');

if(vraag === 'ja') {
    document.querySelector('p').innerHTML = 'Just do it!';
}
else {
    document.querySelector('p').innerHTML = 'Jammer, blijf dan maar liggen.';
}
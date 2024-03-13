function getBookList() {
    const books = [
        {titel: 'The theory of everything', auteur: 'Stephen Hawking', gelezen: 'ja'},
        {titel: '12 rules of life', auteur: 'Jordan Peterson', gelezen: 'nee'}
    ]
    for(let i = 0; i < books.length; i++) {
        let listItem = document.createElement('li');
        let listContent = document.createTextNode(`Titel: ${books[i].titel} ,
         auteur: ${books[i].auteur}.`);

        listItem.appendChild(listContent);

        document.getElementById('boekenLijst').appendChild(listItem);
    }
}
//getBookList();
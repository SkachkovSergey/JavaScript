let numbers = document.querySelectorAll('.number');

for(let number of numbers) {
    number.addEventListener('click', () => {
        number.innerHTML = '';

        let img = document.createElement('img');
        img.src = "https://picsum.photos/200";
        img.alt = 'photo';
        img.width = 100;

        number.appendChild(img);
    });
}



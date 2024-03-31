let teller = 0;

document.getElementsByTagName('button')[0].addEventListener('click', addSentence);
document.getElementsByTagName('button')[1].addEventListener('click', wissenAll);

let addButton = document.getElementById('addButton');
addButton.style.background = '#0000f0';
addButton.style.color = '#ffffff';
addButton.style.borderRadius = '5px';

const wissenButton = document.getElementsByTagName('button')[1];
wissenButton.style.background = '#ff0000';
wissenButton.style.color = '#ffffff';
wissenButton.style.borderRadius = '5px';

function addSentence() {
   teller++;
   let paragraaf = document.createElement('p');
   let paragraafText = document.createTextNode(document.getElementById('textIn').value);
   paragraaf.appendChild(paragraafText);
   paragraaf.id = 'p' + teller;
   document.getElementsByTagName('body')[0].appendChild(paragraaf);

    let items = document.querySelectorAll('p');// een font size vergroten
    for(let p of items) {
        p.style.fontSize = '24px';
    }

   if(teller === 1) {
       document.getElementById('p1').style.color = '#ff0000';
       document.getElementById('p1').style.fontWeight = 'bold';
   }
   else {
       document.getElementById('p' + teller).style.color = '#ff0000';
       document.getElementById('p' + teller).style.fontWeight = 'bold';
       document.getElementById('p' + (teller - 1)).style.color = '#000000';
       document.getElementById('p' + (teller - 1)).style.fontWeight = 'normal';
   }
}
function wissenAll() {
    if(teller >= 1) {
        for(let count = 1; count <= teller; count++) {
            let item = 'p' + count;
            document.getElementsByTagName('body')[0].removeChild(document.getElementById(item));
        }
    }
    // let paragrafen = document.querySelectorAll('p');
    //
    // for(let para of paragrafen) {
    //     para.remove();
    // }
    teller = 0;
}
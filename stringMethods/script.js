/*let code = prompt('Vul uw promotiecode in', 'uw code');
let text = 'De code die je invoerde was: ' + code;
document.getElementById('kortingscode').innerHTML = text;*/

/*console.log('Demo debugging JS');
let text = 'Sergey Skachkov';
console.log(text);
console.log(typeof text);*/

/*console.log('Hello World!');
document.getElementById('deel1').innerHTML = "<b>Hello Wereld- 1</b>";
document.getElementById('deel2').innerText = "<b>Hello Wereld- 2</b>";*/

let text = 'Hello iedereen';
let uitkomst;

uitkomst = text.length;
console.log(uitkomst);

uitkomst = text.charAt(4);
console.log(uitkomst);

uitkomst = text.substring(0, 7);
console.log(uitkomst);

uitkomst = text.indexOf('e');
console.log(uitkomst);

uitkomst = text.lastIndexOf('e');
console.log(uitkomst);

uitkomst = text.toUpperCase();
console.log(uitkomst);

uitkomst = text.toLowerCase();
console.log(uitkomst);

uitkomst = text.replace('h', 'H');
console.log(uitkomst);
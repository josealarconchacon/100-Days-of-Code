// get element by its ID
const title = document.getElementById('main_title');
console.log(title);

// get element by the class name
const err = document.getElementsByClassName('error');
console.log(err);

// get element by the tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[0]);

// add and change page content
const p = document.querySelector('p');
p.innerText += ' is awesome!';


const content = document.querySelector('.content');
console.log(content.innerHTML);
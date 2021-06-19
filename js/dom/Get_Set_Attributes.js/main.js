// get a reference of the element
const link = document.querySelector('a');
// get the attribute
console.log(link.getAttribute('href'));
//  set attribute
link.setAttribute('href','https://www.youtube.com/');
link.innerHTML = "Youtube Site";

const err = document.querySelector('p');
console.log(err.getAttribute('class'))
err.setAttribute('class','success');


// Changing CSS Style
const title = document.querySelector('h1');
// title.setAttribute('style','margin: 50px');
title.style.color = blue;

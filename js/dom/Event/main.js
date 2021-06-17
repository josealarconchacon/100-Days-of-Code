// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('Button clicked');
// });

const items = document.querySelectorAll('li');
// cycle through all of the li tag and attach an event listener to each one of them
items.forEach(item => {
   item.addEventListener('click', e => {
    // console.log('Item clicked');
    // console.log(e);
    // console.log(e.target);
    // change style of item when clicked
    e.target.style.textDecoration = 'line-through';

   }); 
});
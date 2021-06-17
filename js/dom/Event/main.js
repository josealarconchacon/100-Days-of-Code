
const ul = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    // DOM method to create an new html element
   const li = document.createElement('li');
   li.textContent = 'new item';
//    ul.append(li);
   ul.prepend(li);
});


const items = document.querySelectorAll('li');
// cycle through all of the li tag and attach an event listener to each one of them
items.forEach(item => {
   item.addEventListener('click', e => {
    // console.log('Item clicked');
    // change style of item when clicked
    // e.target.style.textDecoration = 'line-through';
    e.target.remove(); // will remove the item

   }); 
});
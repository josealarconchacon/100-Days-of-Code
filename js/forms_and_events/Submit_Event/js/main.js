// get reference for the form
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');


form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the page from refreshing
    // get data from the input field
    console.log(username.value);
});


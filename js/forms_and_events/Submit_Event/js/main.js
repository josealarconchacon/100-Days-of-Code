// get reference for the form
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');


form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the page from refreshing
    // get data from the input field
    console.log(username.value);
});

// test RegEx
const username = "shaunp";
// check for lowerCase letter and for 6 to 10 characters long
const patten = /[a-z]{6,10}$/;
// test patten
let result = patten.test(username);
if(result) {
    console.log('test RegEx has passed.');
} else {
    console.log('Error: RegEx has faild.');
}

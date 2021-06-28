// get reference for the form
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');


form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the page from refreshing

    // Validation
    const username = form.username.value;
    const usernamepattern = /^[a-zA-Z]{0,12}$/;

    if(usernamepattern.test(username)) {
        // feedback: good info
        feedback.textContent = 'The username is valid';
    } else {
        // feedback: help info
        feedback.textContent= 'username can only contain letters, and be between 6 to 12 characters';
    }
});

// test RegEx pattern
// const username = "shaunp";
// // check for lowerCase letter and for 6 to 10 characters long
// const patten = /^[a-z]{6,10}$/;
// // test patten
// let result = patten.test(username);
// if(result) {
//     console.log('test RegEx has passed.');
// } else {
//     console.log('Error: RegEx has faild.');
// }


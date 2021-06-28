// get reference for the form
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamepattern = /^[a-zA-Z]{0,12}$/;

// submit event
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the page from refreshing
    // Validation
    const username = form.username.value;
    if(usernamepattern.test(username)) {
        // feedback: good info
        feedback.textContent = 'The username is valid';
    } else {
        // feedback: help info
        feedback.textContent= 'username can only contain letters, and be between 6 to 12 characters';
    }
});

// live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(usernamepattern.test(e.target.value)) {
        form.username.setAttribute('class','success')
    } else {
        form.username.setAttribute('class','error')
    }
});

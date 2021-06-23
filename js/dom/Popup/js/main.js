// get a reference for the button
const btn = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

// get reference to the close button
const close_btn = document.querySelector('.close');



btn.addEventListener('click', () => {
    popup.style.display = 'block';
});

close_btn.addEventListener('click', () => {
    popup.style.display = 'none';
});
// close popup when clicking on anywhere on the page
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});
// Copy Event
// get a reference
const copy_text = document.querySelector('.copy-text');
// addEventListener
copy_text.addEventListener('copy_text', () => {
    console.log("Content was copy");
});

// Mouse Event
// Mouse move event
const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x possition - ${e.offsetX}, y possition = ${e.offsetY}`
});

// Wheel Event
document.addEventListener('wheel',e => {
    console.log(e.pageX, e.pageY)
});
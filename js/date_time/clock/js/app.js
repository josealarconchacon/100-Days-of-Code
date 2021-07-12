const clock = document.querySelector('.clock');

// update time in the clock every second
const tick = () => {
    // create a new date
    const now = new Date();

    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    // html template
    const html = `
    <span>${hours}</span> :
    <span>${mins}</span> :
    <span>${seconds}</span> 
    `;
    clock.innerHTML = html;
};

// coll the function every second
setInterval(tick, 1000);
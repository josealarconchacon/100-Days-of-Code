const clock = document.querySelector('.clock');

// update time in the clock every second
const tick = () => {
    // create a new date
    const now = new Date();

    const hours = now.getHours();
    console.log(hours);

};
// coll the function every second
setInterval(tick, 1000);
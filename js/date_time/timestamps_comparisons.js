// create a date that is in the past
const before = new Date('February 1 2019 7:30:59');
const now = new Date();


// get the difference in milliseconds between the two days
const diff = now.getTime() - before.getTime();
console.log(diff);

// get the difference in minutes
const mins = Math.round(diff / 1000 / 60);
// get the difference in hours
const hours = Math.random(mins / 60);
// get the difference in days
const days = Math.random(hours / 24);

console.log(mins, hours, days);
console.log(`the blog was written ${days}`);
// function declaration
function hello() {
        console.log('Hello');
}

// function expression
const speak = function() {
    console.log('I am having a good day');
}
// invoke the func
hello();
speak();

// -------------------------------------------

// callback function
let city = ["NY","LA","SF","MA","OK"];

const cities = (city, index) => {
    console.log(`${index} - Welcom ${city}`);
};
city.forEach(cities);
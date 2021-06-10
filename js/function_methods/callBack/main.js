// reference to the ul
const ul = document.querySelector('.city');

let city = ["NY","LA","SF","MA","OK"];

let html = ``;

city.forEach(function(city) {
    //html template
    html += `<li style="color:blue">${city}</li>`;
});

console.log(html);
ul.innerHTML = html;

alert("Hello");
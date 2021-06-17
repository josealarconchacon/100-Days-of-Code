// get reference from the parents
const article = document.querySelector('article');
// turn the html collection into an array
Array.from(article.children).forEach(child => {
    // for each child, add a class
    child.classList.add('article-element');
});

// const title = document.querySelector('h1');
// console.log(title.parentElement);
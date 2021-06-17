// get reference of all p tag
const paragraph_content = document.querySelectorAll('p');
paragraph_content.forEach(para => {
    // check if the text inside each p tag has either error or success
    if(para.textContent.includes('error')) {
        // give the paragraph a class of error
        para.classList.add('error');
    }
    if(para.textContent.includes('success')) {
        para.classList.add('success');
    }
});

// toggle method
const t = document.querySelector('.title');
t.classList.toggle('text');
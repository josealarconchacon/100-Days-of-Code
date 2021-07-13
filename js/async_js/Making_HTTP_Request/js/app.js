const get_todo = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open(`GET`, 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

get_todo((error, data) => {
    console.log('callback fire');
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
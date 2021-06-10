// Object Literal
let person = {
    name: 'Tom',
    email: 'tomax@gmail.com',
    location: 'Texas',
    age: 99,
    book: ['Why I am living Texas']
};

console.log(person);

// access property from the object
console.log(person.name);
console.log(person['age'])

// overwrite property of an object
person.location = 'Chicago';
person['name'] = 'Toni';
console.log(person.location);

// Primitive vs Reference Types

// Primitive
let num1 = 20;
let num2 = num1;

console.log(`num1: ${num1}`,`num2: ${num2}`);

num1 = 100;
console.log(`num1: ${num1}`,`num2: ${num2}`);

console.log("-------------------------------------")


// Reference
const name1 = {name: 'tom', pet: true};
const name2 = name1;

console.log(name1,name2);

// will update both name
name1.pet = false;
console.log(name1,name2);
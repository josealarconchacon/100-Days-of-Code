// Chaining Array Methods

const fruits = [
    {name: 'apple', price: 5},
    {name: 'banana', price: 2},
    {name: 'blackberries', price: 8},
    {name: 'breadfruit', price: 1},
    {name: 'cherries', price: 4}
];

const promotion = fruits
    // keep item in the array if the price is over 3
    .filter(fruit => fruit.price > 3)
    // map filtered array into a new array
    .map(fruit => `the ${fruit.name} is ${fruit.price / 2} pounds`);

console.log(promotion);



// // keep item in the array if the price is over 3
// const filtered = fruits.filter(fruit => fruit.price > 3)
// // map filtered array into a new array
// const promos = filtered.map(fruit => {
//     return `the ${fruit.name} is ${fruit.price / 2} pounds`
// })
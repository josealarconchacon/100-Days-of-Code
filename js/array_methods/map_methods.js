// map methods
const prices = [100, 70, 93, 95, 59, 40];

// new const to store the new array
const new_price = prices.map(price => {
    // returning half the prices
    return price / 2; // [ 50, 35, 46.5, 47.5, 29.5, 20 ]
});
console.log(new_price);



const cars = [
    {name: 'Lucid', price: 67000},
    {name: 'Tesla', price: 45000},
    {name: 'Honda', price: 25000},
    {name: 'Mercedes', price: 42000},
    {name: 'Toyota', price: 22000},
    {name: 'For', price: 19000},
];

// create a new matrix reducing all prices that are more than 25000 cutting it in half
const new_sales_product = cars.map(product => {
    if(product.price > 25000) {
        return {name: product.name, prices: product.price / 2};
    } else {
        return product;
    }
});console.log(new_sales_product);
/*
    { name: 'Lucid', prices: 33500 },
    { name: 'Tesla', prices: 22500 },
    { name: 'Honda', price: 25000 },
    { name: 'Mercedes', prices: 21000 },
    { name: 'Toyota', price: 22000 },
    { name: 'For', price: 19000 }
 */
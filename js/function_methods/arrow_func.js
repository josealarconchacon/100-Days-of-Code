
const set_area = (radius) => {
    return 3.14 + radius**2;
};
const calculate_area = set_area(5);
console.log('Area is: ', calculate_area);

// -----------------------------------------------------------
// Arrow functions
const area = radius => 3.14 * radius**2;
const a = area(5);
console.log('The area: ', a);

// -----------------------------------------------------------

const bill = (product, tax) => {
    let total = 0;
    for(let i = 0; i < product.length; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));
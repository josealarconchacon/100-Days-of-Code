let names = ['Tim', 'Tom', 'Tara'];
names[1] = "Niki";
console.log(names[1]);

let random = ['Tamara', 'Casi', 45, 55];
console.log(random);

console.log(names.length);


// Arrays methods
let result = names.join(',');
console.log(result);

let res = names.indexOf('Tom');
console.log(res);

let res1 = names.concat(['Ken', 'Jane']);
console.log(res1);

let res2 = names.push('Amanda');
console.log(res2);
console.log(names);

let res3 = names.pop();
console.log(res3);

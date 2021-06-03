let email = "marionero@gmail.com";

// lastIndexOf
let res1 = email.lastIndexOf('n');
console.log(res1);

// slice
let res2 = email.slice(0, 5);
console.log(res2); // mario

// substr
let res3 = email.substr(4,7);
console.log(res3);  // onero@g

// replace
let res4 = email.replace('m','w');
console.log(res4); // warionero@gmail.com
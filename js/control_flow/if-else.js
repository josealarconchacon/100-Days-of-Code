const car = ['Honda','Tesla','BMW','Toyota'];
if(car.length > 4) {
    console.log('To much cars');
}
// --------------------------------------------

const password = "the@phre";

if(password.length >= 12 && password.includes('@')) {
    console.log('Password is might strong');
} else if(password.length >= 8 || password.includes('@')) {
    console.log('Password is to long!!!!');
} else {
    console.log('Password is not long!!!!');
}


const number = [11,22,0,45,65,200,34,100];

for(let i = 0; i < number.length; i++) {
    console.log('number', number[i]);

    if(number[i] === 0) {
        continue;
    }

    if(number[i] === 200){
        console.log('You got the largest number!');
        break;
    }
}
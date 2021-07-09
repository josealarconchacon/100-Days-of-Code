// Reduce Methods

const score = [100, 70, 93, 95, 59, 40];

// use the reduce methods to return how many score are over 60
const new_value = score.reduce((total, current) => {
    if(current > 60) {
        total++;
    }
    return total;
}, 0);

// console.log(new_value);  # 4



const user_score = [
    {name: 'Maria', score: 25},
    {name: 'Tomaz', score: 45},
    {name: 'Juan',  score: 65},
    {name: 'Tara',  score: 21},
    {name: 'Felipe',score: 26},
    {name: 'Maria', score: 100}
];

const maria_total = user_score.reduce((total, current) => {
    if(current.name === 'Maria') {
        total += current.score;
    }
    return total;
},0); // set it to 0 to begin with 
console.log(maria_total);
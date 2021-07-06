// sorting strings in alphabetical order
const cities = ['New York', 'Los Angeles', 'Chicago', 'Oakland','Portland'];
cities.sort();
// cities.reverse(); - will reverse the string
console.log(cities);


// sorting numbers
const scores = [10,34,54,24,43,70]
scores.sort();
console.log(scores);


// // sorting objects by the score
const student_scores = [
    {name: 'tommy', score: 90},
    {name: 'alicia', score: 80},
    {name: 'mauricio', score: 85},
    {name: 'raul', score: 96},
    {name: 'carlo', score: 93}
];

student_scores.sort((n,s) => {
    if(n.score > s.score) {
        return - 1;
    } else if(s.score > n.score) {
        return 1;
    } else {
        return 0;
    }
});

console.log(student_scores);


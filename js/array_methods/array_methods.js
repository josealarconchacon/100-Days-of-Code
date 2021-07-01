const score_list = [10, 30, 13, 25, 50, 40];
// filter all the score that are over 20
const filterScore = score_list.filter((score) => {
    return score > 20;
});
// console.log(filterScore); // [ 30, 25, 50, 40 ]



const users = [
    {name: 'Tony', pet: false},
    {name: 'Sam', pet: true},
    {name: 'Elizabeth', pet: true},
    {name: 'Sandino', pet: false},
    {name: 'Felix', pet: false},
    {name: 'Pedro', pet: true}
];
// use the filter methods to get all the user that have pets
const usersWithPet = users.filter(p => {
    return p.pet;
});

console.log(usersWithPet); // { name: 'Sam', pet: true }, { name: 'Elizabeth', pet: true }, { name: 'Pedro', pet: true }
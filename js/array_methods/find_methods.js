// Given an array of scores, find the first score that is over 50
const scores = [10,34,54,24,43,70]

const first_heigh_score = scores.find((score) => {
    // return score > 50;
    if (score > 50) {
        return score
    }
});

console.log(first_heigh_score); // 54
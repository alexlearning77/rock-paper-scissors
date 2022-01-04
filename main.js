function computerPlay (max) {
    return Math.floor(Math.random() * max);
}

let score = computerPlay(3);
let result;

function outcome(score) {
    if (score == 0) {
        result = "Rock!";
    } else if (score == 1) {
        result = "Paper!";
    } else {
        result = "Scissors!";
    }
    return result;
}
// console.log(outcome(score));
 
function displayScore () {
    let output = document.getElementById('result');
    output.innerHTML = "Result is: " + outcome(score);
}
 
console.log(displayScore());
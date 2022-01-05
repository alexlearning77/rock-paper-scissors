const random = Math.floor(Math.random() * 3);
const played = "";

function computerPlay(random) {

        switch (random) {
            case 0:
                played = "Rock!";
                break;
            case 1:
                played = "Paper!";
                break;
            case 2:
                played = "Scissors!";
                break;
        }
        return played;

}
console.log(played);
// function displayScore() {
//     let output = document.getElementById('result');
//     output.innerHTML = "Result is: " + outcome(score);
// }
 
// console.log(displayScore());
// console.log(result);
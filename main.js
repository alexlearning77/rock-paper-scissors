function displayScore() {
    const random = Math.floor(Math.random() * 3);
    let played = "";

    function computerPlay() {

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

    let output = document.getElementById('result');
    output.innerHTML = "Result is: " + computerPlay();
}
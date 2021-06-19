for (var i = 0; i < 3; i++) {
    var button = document.querySelectorAll("button")[i];
    button.addEventListener("click", function (event) {
        var playerChoice = event.target.innerHTML;
        console.log(playerChoice);

        var randomNumber = Math.floor(Math.random() * 3) + 4;
        // console.log(randomNumber);
        var computerChoice = "";
        switch (randomNumber) {
            case 4:
                computerChoice = "✊";
                document.querySelector(".computer-input > .paper").innerHTML =
                    "✊";
                break;

            case 5:
                computerChoice = "✋";
                document.querySelector(".computer-input > .paper").innerHTML =
                    "✋";
                break;

            case 6:
                computerChoice = "✌";
                document.querySelector(".computer-input > .paper").innerHTML =
                    "✌";
                break;

            default:
                console.log("Error In switch statement");
        }

        var playerScore =
            document.querySelector(".your-score .score");
        var computerScore =
            document.querySelector(".computer-score .score");
        
        

        if (playerChoice == computerChoice) {
            document.querySelector("h2").innerHTML = "Draw";
        } else if (playerChoice == "✊" && computerChoice == "✌") {
            document.querySelector("h2").innerHTML = "Win";
            playerScore.innerHTML = playerScore.innerHTML / 1 + 1 + "";
        } else if (playerChoice == "✋" && computerChoice == "✊") {
            document.querySelector("h2").innerHTML = "Win";
            playerScore.innerHTML = playerScore.innerHTML / 1 + 1 + "";
        } else if (playerChoice == "✌" && computerChoice == "✋") {
            document.querySelector("h2").innerHTML = "Win";
            playerScore.innerHTML = playerScore.innerHTML / 1 + 1 + "";
        } else {
            document.querySelector("h2").innerHTML = "Loss";
            computerScore.innerHTML = computerScore.innerHTML/1 + 1 + "";
        }
    });
}

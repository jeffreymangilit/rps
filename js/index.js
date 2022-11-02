var selection = ["rock", "paper", "scissors"];
var yourScore = 0;
var oponentScore = 0;

var you;
var computerRand;
var computerSelection;
var computerPick;




for (var i = 0; i < document.querySelectorAll(".selection").length; i++) {

    document.querySelectorAll(".selection")[i].addEventListener("click", function () {
       
        you = selection[this.id]
        pressAnimation(this.id);
        youImage = "images/P1-" + you + ".png";
        computerRand = Math.floor(Math.random() * selection.length);
        computerSelection = "images/P2-" + selection[computerRand] + ".png";
        computerPick = selection[computerRand];

        // Check for Winner

        if (you == computerPick) {
            console.log("Draw!")
            document.querySelectorAll("h3")[0].innerHTML = "Draw!"

        } else {
            if (you == "rock") {
                if (computerPick == "scissors") {
                    document.querySelectorAll("h3")[0].innerHTML = "You Won!"
                    console.log("You Won!")
                    yourScore++;
                } else if (computerPick == "paper") {
                    document.querySelectorAll("h3")[0].innerHTML = "You Lose!"
                    console.log("You Lose!")
                    oponentScore++;
                }
            } else if (you == "scissors") {
                if (computerPick == "paper") {
                    document.querySelectorAll("h3")[0].innerHTML = "You Won!"
                    console.log("You Won!")
                    yourScore++;
                } else if (computerPick == "rock") {
                    document.querySelectorAll("h3")[0].innerHTML = "You Lose!"
                    console.log("You Lose!")
                    oponentScore++;
                }
            } else if (you == "paper") {
                if (computerPick == "rock") {
                    document.querySelectorAll("h3")[0].innerHTML = "You Won!"
                    console.log("You Won!")
                    yourScore++;
                } else if (computerPick == "scissors") {
                    console.log("You Lose!")
                    document.querySelectorAll("h3")[0].innerHTML = "You Lose!"
                    oponentScore++;
                }
            }
        }

        // Displaying image
        document.querySelectorAll("img")[0].setAttribute("src", youImage);
        document.querySelectorAll("img")[1].setAttribute("src", computerSelection);

        document.querySelectorAll("H2")[0].innerHTML = yourScore;
        document.querySelectorAll("H2")[1].innerHTML = oponentScore;
        var limit = 5

        if (yourScore == limit) {
            alert("Congratulation! You Won!")
            window.location.reload()
        } else if (oponentScore == limit) {
            alert("Game Over! You Lose!")
            window.location.reload()
        }
        

    });
}


function pressAnimation(currentKey) {
    var active = document.getElementById(currentKey);
    active.classList.add("press");
    setTimeout(function(){
        active.classList.remove("press");
    }, 100);
}


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
var notComputerChoices = ["m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuessSoFar = 0;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var newGame = function () {
        guessesLeft="10";
        yourGuessSoFar="";
    }

    var soFar = function() {
        document.getElementById("guesses-so-far-text").innerHTML = "Guesses so far: " + computerChoices.join(", ");
     };

    if (userGuess === computerGuess) {
        wins++;
        alert("You Won! Congrats!");
        newGame();
    } else {
        guessesLeft--
    }


    if (userGuess >= notComputerChoices) {
        alert("Please choose a letter a-m")
    }

    if (guessesLeft === 0) {
        losses++;
        alert("Game Over. Better Luck Next Time!");
        newGame();
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses So Far: " + userGuess;
}


// Display the user and computer guesses, and wins/losses/ties.

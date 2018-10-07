var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
var notComputerChoices = ["m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var yourGuessSoFar = 0;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");
//var userGuess;
var userGuesses = [];


document.onkeyup = function (event) {
    userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

    var newGame = function () {
        guessesLeft="5";
        yourGuessSoFar="";
        userGuesses = [];
    }

    

    if (userGuess === computerGuess) {
        wins++;
        newGame();
        alert("You Won! Congrats!");
        
    } else {
        userGuesses.push(userGuess);
        document.getElementById("guesses-so-far-text").innerHTML = "Guesses so far: " + userGuesses.join(", ");
        guessesLeft--;
    }


    if (userGuess >= notComputerChoices) {
        alert("Please choose a letter a-m")
        guessesLeft++;
    }

    if (guessesLeft === 0) {
        losses++;
        newGame();
        alert("Game Over. Better Luck Next Time!");
        
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    //guessesSoFarText.textContent = "Guesses So Far: " + userGuess;

}


// Display the user and computer guesses, and wins/losses/ties.

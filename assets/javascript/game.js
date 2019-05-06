

var wordList = [
    "Journey",
    "Blondie",
    "Madonna",
    "Michael Jackson",
    "New Kids On the Block",
    "Elton John",
    "Lionel Richie",
    "Culture Club",
    "Reo Speedwagon",
    "REM",
    "U2"
]

//for loop to get blanks for letter.
//for loop to match blanks to letters to identify when word has been guessed.
var wins = 0;
var userGuessesLeft = 12;
var directionsText = document.getElementById("directions-text");
var answerArray = [];
var guessed = [];
var currentWord = document.getElementById("current-word");
var secretWord
var userWins = document.getElementById("user-wins");
// var userLosses = document.getElementById("user-losses");
var guessesLeft = document.getElementById("guesses-left");
var lettersGuessed = document.getElementById("letters-guessed");
// this function is ran whenever the user presses a key.


//function that includes setting guesses, letters guessed values, all the base values, puts the dashes
//on the pages, sets number of guesses, picks the word and sets the letters they have guessed to a value
// all in  a reset function they can call repeatedly.
baseValues();
function baseValues() {


    //
    secretWord = wordList[Math.floor(Math.random() * wordList.length)];
    //console.log(secretWord);
    secretWord = secretWord.toLowerCase();
    console.log(secretWord);
    wordToGuess = secretWord;



    //var wordLetters = str.split("");
    for (var i = 0; i < secretWord.length; i++) {
        console.log("secret word character is: " + secretWord[i]);
        if (secretWord[i] === " ") {
            answerArray.push("*");
            console.log("the space is now " + secretWord[i]);
        } else {
            answerArray.push("_");
            console.log("The underscore is now: " + secretWord[i]);
        }

        currentWord.textContent = answerArray.join(' ');


    };
    guessesLeft.innerText = ("Guesses left: " + userGuessesLeft);
    

}


document.onkeyup = function (event) {

    //randomly chooses a word from array.
    //reset function when they open the page and the call the reset function when they win or lose. 
    //if .includes if exists then .indexof to see where it exists
    var userGuess = event.key.toLowerCase();
   
    if (secretWord.includes(userGuess)) {

        for (var i = 0; i < secretWord.length; i++) {

            if (secretWord[i] === userGuess) {
                answerArray[i] = userGuess;
                currentWord.textContent = answerArray.join(' ');
                // console.log("the current word now looks like " + currentWord);
            };
        }

    } else {
        if(guessed.includes(userGuess)){

        }else{
            if (userGuessesLeft > 1) {
                userGuessesLeft--
                guessed.push(userGuess);
        
            } else {
                userGuessesLeft--
               reset();
            };
        }


    };
    guessesLeft.innerText = ("Guesses left: " + userGuessesLeft);
    lettersGuessed.innerText = ("Letters guessed: " + guessed.join(" "));

}

function reset(){
    guessed = [];
    answerArray = [];
    userGuessesLeft = 12;
    userWins.textContent = ("Wins: " + wins);
    baseValues();
}
    //loop through array



// Determines which key was pressed.
    //var userGuess = event.key;

    //Check secretWord letters with userGuess to determine if letter is in secretWord.

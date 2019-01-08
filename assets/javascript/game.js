
$(document).ready(function() {

//Setting the variables for the game.

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];
var computerGuess = computerGuess;
var userGuess = userGuess;

//Connects the elements in the HTML file to the variables set.
var winsText = document.getElementById('wins');
var lossesText = document.getElementById('losses');
var guessesText = document.getElementById('guesses');
var guessesSoFartext = document.getElementById('guessesSoFar');

//Researched function to generate random number (math.random) & to round down to nearest integer (math.floor). That number multiplies against 26 (# of letters in alphabet array) to determine computer's letter guess. 
computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//This function logs the key pressed as the user's guess.
document.onkeypress = function(event) {
    var userGuess = event.key;

//This if else if statement lays out the logic of the game. 
//If user guess = computer guess, one is added to 'wins'. If user guess is not equal to computer guess, the number of available guesses goes down. When available guesses is '0', one is added to 'losses'.
    if(userGuess === computerGuess) {
        wins++;
        guessesSoFar++;
    }else{
        guesses--;
        guessesSoFar++;
    }
    if (guesses === 0) {
        losses++
    }


winsText.textContent = "wins" + wins;
lossesText.textContent = "losses" + losses;
guessesText.textContent = "guesses" + guesses;
guessesSoFarText.textContent = "guessesSoFar" + guessesSoFar;

});
/*------Constants------*/





/*------Variables------*/
let secretNum, guessList, isWinner, currentGuess;






/*------Cached Element References------*/
const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessesBtn = document.getElementById('guessButton');
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');
const titleEl = document.querySelector('h1')






/*------Event Listeners------*/

resetBtn.addEventListener('click', function(){
    init();
})
guessesBtn.addEventListener('click', function(){
    if(guessList.length === 0) {
        guessesEl.innerText = 'Previous Guesses:'
    }
    if (isWinner === false){
        checkGuess(parseInt(guessInput.value)); // parseInt turns a 'string' into a number
    }
})





/*------Functions------*/

// Initialaization Function sest all state variables for a new game

init(); // This is calling the function

function init(){
    // Easy way to remove all appended children from and element.
    guessesEl.innerText = '';
    messageEl.innerText = 'Please enter a number between 1 and 100!';
    guessInput.value = '';
    guessList = [];
    isWinner = false;
    secretNum = Math.floor(Math.random()*100 + 1);
}

function checkGuess(guess) {
    
    if (guess < 1 || guess > 100){
        messageEl.innerText = 'Oh No!!! Please enter a number between 1 and 100';
    } else if (guess === secretNum) {
        // win scenario
        titleEl.className = "animate__animated animate__bounce"
        confetti.start(1500)
        messageEl.className = 'winner'
        isWinner = true;
        if (guessList.length === 0) {
            messageEl.innerText = `Congratulations!  You found the number in ${guessList.length +1} guess!`
        } else {
            messageEl.innerText = `Congrats you found the Number in ${guessList.length + 1} guesses!`
        }
        
    } else if ( guess < secretNum){
        // Handle guess is too low
        messageEl.innerText = `Your guess of ${guess} is to low`
        messageEl.className = 'low';
        guessList.push(guess);
        
       
    } else if (guess > secretNum) {
        // Handle is too high
        messageEl.innerText = `Your guess of ${guess} is to high`
        messageEl.className = 'high';
        guessList.push(guess);
    } else {
        messageEl.innerText = `Lol, That's not a Number Silly `
        messageEl.className = 'notANum'
        
    }
    render(guess);

}

function render(guess){
// Append a Child Div to the guessesEl div based on whether our guess is higher or lower than secretNum
console.log(guess)
if (guess === secretNum){
    let div = document.createElement('div');
    div.innerText = guess;
    div.className = 'winner'
    guessesEl.appendChild(div);
} else if (guess > secretNum){
    // Create a new div, then append to the parent div to the parent div (guessesEl)
    let div = document.createElement('div');
    div.innerText = guess;
    div.className = 'high'
    guessesEl.appendChild(div);
} else {
    let div = document.createElement('div');
    div.innerText = guess;
    div.className = 'low'
    guessesEl.appendChild(div);
}
}




//// Create an HTML element for the game's title.
//// Create an HTML element to handle displaying messages to the user.
//// Create an input field for the user to enter a number.
//// Create an HTML element to handle displaying a list of previous guesses.
//// Create 'Guess' and 'Reset' buttons.
//// Define variables for secret number, guess list, current guess, if there is a winner (boolean).
//// Define cached element reference for the game message and previous guesses HTML elements, and both buttons.
//// Write an initialization function that resets the game's status and picks a winning number. Call the initialization function before any other functions.
//// Write an event listener for the 'Reset' button to run the initialization function and reset the game.
//// Add an event listener for the 'Submit' button that calls a function to check the current guess. Pass the current value of the input element into the function for comparison. This function should compare the guess to the secret number. Stub up conditional statements to handle what happens when the number is higher, lower, or equal to the secret number.
//// Fill in each of the conditional statements for the checkGuess function. Flip the isWinner variable to true if there's a correct guess to prevent additional clicks. Add a line to clear out the guess input value as well as error handling for inputting a number out of range. Push the guess into the previous guesses array. Call a function to render all guesses.
//// Write a render function to display the list of previous guesses on the page. Append an element to the cached guesses element, also adding a class name indicating whether it is higher or lower than the secret number.
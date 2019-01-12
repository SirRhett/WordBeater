//Add select list of levels(eventlistener)
//Add higest score list(localstorage.setitem.highscore)
//Game Score Dynamic
//React
//Random word API


//Add an event listener that fires when a user clicks a button:
window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Random Words
const words = [
'charge',
'run',
'imminent',
'balance',
'true',
'debonair',
'friend',
'pump',
'cats',
'dusty',
'bells',
'wrist',
'volatile',
'men',
'puppy',
'pumped',
'burst',
'didactic',
'grubby',
'snow',
'test',
'legs',
'deserted',
'house',
'amount',
'cooing',
'pleasure',
'ritzy',
'comparison',
'psychedelic',
'form',
'excellent',
'quickest',
'sniff',
'demonic',
'rush',
'cannon',
'vast',
'bait',
'oval',
'end',
'six',
'squalid',
'subdued',
'stamp',
'disturbed',
'tree',
'adaptable',
'weight',
'stimulating',
'refuse',
'deep',
];

// Initialize Game
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
     //Load word from array
     showWord(words);
     //Start matching on word input
     wordInput.addEventListener('input', startMatch)
     //Call countdown every second
     setInterval(countdown, 1000);
     //Check game status
     setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
        console.log('MATCH!!!')
    }
    //If score is -1, display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML ='';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    //Make sure time is not run out
    if(time > 0) {
        //Decrement
        time--;
    } else if(time === 0) {
        //Game is over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
        //Reset score
        score = -1;
    }
}
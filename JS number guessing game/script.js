//Guess the number game

let number = 33;
let guess = 0;

do {
    guess = parseInt(prompt("Guess a number(1-50). Enter 0 to quit"));
    if(guess == number){
        alert("Congratulations!!!!!! You Won!!!!");
        break;
    }

    else if(guess>0 && guess!=number) {
        alert("You lost. Try again!");
    }

    else {
        alert("You quit the game.")
    }
} while(guess != 0)
//CONDITIONAL STATEMENTS IN JS

//if statement
const age = 19;

if(age >= 18) {
    console.log("Eligible to vote");
}

let num = 10;

if(num%2 == 0) {
    console.log("The number is even");
}

else {
    console.log("The number is odd");
}

//else statement 

let a=5;
let b=6;

if(a > b){
    console.log("a is greater");
}

else {
    console.log("b is greater");
}

//else if statement

let c=8;

if(a>b){                               //Nested if statement

    if(a>c){
        console.log("a is greatest");
    }

    else {
        console.log("c is greatest");
    }

}

else if(b > c) {
    console.log("b is greatest");
}

else {
        console.log("c is greatest");
    }


//switch statement
const option = 6;

switch(option) {

    case 1: console.log("Namaste!");
    break;

    case 2: console.log("Bonjour!");
    break;

    case 3: console.log("Ola!")
    break;

    default: console.log("Hello!");
}

const day = 7;

switch(day) {

    case 1: console.log("Sunday!");
    break;

    case 2: console.log("Monday!");
    break;

    case 3: console.log("Tuesday");
    break;

    case 4: console.log("Wednesday");
    break;

    case 5: console.log("Thursday");
    break;

    case 6: console.log("Friday");
    break;

    case 7: console.log("Saturday");
    break;

    default: console.log("INVALID INPUT!");
}
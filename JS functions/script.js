//Functions in JS

function sayHello() {
    console.log('Hey Kamal');
}

sayHello();

//add funtion
function add(a, b) { //Here a and b are arguments
    return a + b;
}

console.log(add(5, 3));//5 and 3 are parameters


//multiply function
function multiply(a, b) {
    return a * b;
}

let mul = multiply(2, 3);

console.log("The multiplication is", mul);


// function that accepts unlimited arguments 

function addNumbers() {
    let ans = 0;
    for(let i = 0; i < arguments.length; i = i+1){
        ans = ans + arguments[i];
    }
    return ans;
}

let result = addNumbers(5, 6, 8);
console.log(result);

//using spread operator

function addNumbersV2(...numbers) {
    let ans = 0;
    for(let i = 0; i < numbers.length; i++){
        ans = ans + numbers[i];
    }
    return ans;
}

let sum = addNumbers(5, 6);
console.log(sum);


//Example: 1

function square(a) {
     return a * a;
} 

console.log(square(5));

//Example: 2

message = function() {
    console.log("Never give up!");
}

message();

//Example: 3 // Recursive Function to Calculate Factorial
function factorial(n) {
  if (n === 0) {
    return 1; 
  } else {
    return n * factorial(n - 1); 
  }
}
console.log(factorial(3)); 

//Example: 4 Function hoisting example
console.log(hoistedFunction()); 

function hoistedFunction() {
  return 'Hello, world!';
}

//Example 5:
function showArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

showArguments('first', 'second', 'third');


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

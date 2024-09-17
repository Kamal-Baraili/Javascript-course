//HIGH ORDER FUNCTIONS AND CALLBACKS IN JS

function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(2, 3, function (val) {
    console.log(val);
}); 

add(2, 4, val => console.log(val)); //using arrow function


//function returning function example
function add(a, b) {
    let result = a + b;
    return () => console.log(result);
}

let myfunction = add(2,5);

myfunction();

//Example 1:
const applyOperation = (a, b, operation) => operation(a, b);

const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, sum));
console.log(applyOperation(5, 3, multiply));
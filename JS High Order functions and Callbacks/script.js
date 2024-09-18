//HIGH ORDER FUNCTIONS AND CALLBACKS IN JS

function add1(a, b, cb) {
    let result = a + b;
    cb(result);
}

add1(2, 3, function (val) {
    console.log(val);
}); 

add1(2, 4, val => console.log(val)); //using arrow function


//function returning function example
function add1(a, b) {
    let result = a + b;
    return () => console.log(result);
}

let myfunction = add1(2,5);

myfunction();

//Example 1:
const applyOperation = (a, b, operation) => operation(a, b);

const sum = (x, y) => x + y;
const mul = (x, y) => x * y;

console.log(applyOperation(5, 3, sum));
console.log(applyOperation(5, 3, mul));

//Example 2:
const applyFunction = (func, args) => {
  return func(...args);
};

const avg = (a, b) => (a + b)/2;
console.log(applyFunction(avg, [5, 3]));

//Example 3:
function createCalculator(operation) {
    return function(a, b) {
        switch (operation) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                return a / b;
            default:
                return null;
        }
    };
}

const add = createCalculator('add');
const subtract = createCalculator('subtract');
const multiply = createCalculator('multiply');
const divide = createCalculator('divide');


console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(divide(9,3));


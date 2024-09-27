function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val;
}

function multiply(args) {
    return args[0] * args[1];
}

// function composeTwoFunction(fn1, fn2) {
//     return function (a, b) {
//         return fn2(fn1(a,b));
//     };
// }

const composeTwoFunction = (fn1, fn2) => (a, b) => fn2(fn1(a,b));

// const task = composeTwoFunction(multiply, square);

// console.log(task(2, 3));

//compose unlimited fuctions

function compose(...fns) {
    return function (...value){
        return fns.reduce((a,b) => b(a), value);
    }
}

const composeAll = (...fns) => (...val) => fns.reduce((a,b) => b(a), val);

const task2 = composeAll(multiply, square);
console.log(task2(3, 1));
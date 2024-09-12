//Arrow funtions 

// 1. Syntax
const sayHello = () => {
    console.log('Hello');
}


const add = (a, b) => {
    return a + b;
}
console.log(add(2,3));

const addV2 = (a, b) => a+b //One liner
console.log(addV2(3,3));

// 2. 'arguments' keyword
const addNumbers = (...nums) => {
    console.log(nums);
}

addNumbers(11, 22, 33, 44, 55)


// 3. Hoisting
const sayHey = () => {
    console.log('Hey');
}

sayHey();


// 4. This keyword
const obj = {
    value: 20,
    Myfunction: function () {
        console.log(this.value);
    },
}

obj.Myfunction();
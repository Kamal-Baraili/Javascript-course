function main(name) {
    function sayMyName() {
        console.log(name);
    }
    
    return sayMyName;
}

let consoleKamal = main("Kamal");

consoleKamal();
consoleKamal();

//Example 1: 

function adder(num) {
    function add(b) {
        console.log(num + b);
    }
    return add;
}

const addTo5 = adder(5);
const addTo10 = adder(10);

addTo5(2);
addTo5(10);

addTo10(2);
addTo10(10);

//Practical use case of closure
const heading = document.getElementById("heading");
const btn = document.getElementById("my-btn");

function makeTextSizer(size) {
    
    function changeSize() {
        heading.style.fontSize = `${size}px`;
    }
    
    return changeSize;
}


const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size5 = makeTextSizer(5);

btn.addEventListener("click", size12);


//Make Counter

function makeCounter() {
    let count = 1;

    function increment() {
        console.log(count++);
    }

    return increment;
}

const counter1 = makeCounter();

counter1();
counter1();
counter1();
counter1();
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
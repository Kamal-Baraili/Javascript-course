//IIFE - Immediately Invoked Function Expression

(function add(a, b) {
    console.log(a + b);
})(2, 3);

(function say() {
    console.log("Hey");
})();

(() => console.log("Hello"))();

const value = (() => 50)();

console.log(value);

//Example 1:

// const data = (async () => await fetch())();

//Example 2:

const atm = function (initailBalance) {
    let balance = initailBalance;
    function withdraw(amt) {
        if (amt > balance) {
            return 'Withdrwal amount is greater than the balance';
        } else {
            balance -=amt;
            return balance;
        }
    }
    return { withdraw };
};

const kamal = atm(1000);
console.log(kamal.withdraw(100));
console.log(kamal.withdraw(100));
console.log(kamal.withdraw(1000));

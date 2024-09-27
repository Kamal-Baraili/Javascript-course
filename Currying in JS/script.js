function add(a) {
    return function(b) {
        return function(c) {
            return a + b +c;
        }
    }
}

/* Using arrow function

const add = a => b => c => a + b + c;

*/

console.log(add (2)(3)(5));

Example
function sendAutoEmail(to) {
    return function(subject) {
        return function(body) {
            console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
        }
    }
}

/* Using arrow function

const sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);

*/

let step1 = sendAutoEmail('kamalbaraili86@gmail.com');
let step2 = step1("New Order Confirmation");

step2("Hey Kamal, Here is something for you!");

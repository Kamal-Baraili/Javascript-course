//Variables

//var -> Global

var age = 22;
var num1 = 10;
var num2 = 11;

console.log(age)

console.log(num1 + num2)

//Naming convention for variables -> use camel case

var firstName = "Kamal"
console.log(firstName)


//let -> Local

if (true) {
    let a = 5;
    console.log(a);
}

//const -> local Note: once value is assigned to const, the value cannot be reassigned

const x = 25;

console.log(x)

//Variables practice with their data types

//strings
let a = "Kamal";
let b = "Baraili";

console.log(a + ' ' + b);

//boolean
let con = true;
console.log(con);

//object
const employee = {
    Name: 'Kamal Baraili',
    Age: 25,
    Gender:'M',
}

console.log(employee.Gender)

//undefined
var und;
console.log(und);

//null
let n = null;
console.log(n);

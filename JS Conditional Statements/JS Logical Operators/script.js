//Logical operators

//and operator
const age = 20;
const gender = 'male';

if (age >= 18 && gender == 'male') {
    console.log('You are an adult male');
}

//or operator
const a = 20;
const b = 5;

if(a > 10 || b > 10) {
    console.log('At least one number is greater than 10');
}

//not
const number = 5;

if(number%2 != 0) {
    console.log('odd');
}
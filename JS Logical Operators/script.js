//Logical operators

//and operator
const age = 20;
const gender = 'male';

if (age >= 18 && gender == 'male') {
    console.log('You are an adult male');
}

let hasPass = true;
const age2 = 25;

if (hasPass && age2 >= 21) {
    console.log("Access granted to the VIP area.");
} else {
    console.log("Access denied to the VIP area.");
}

//or operator
const a = 20;
const b = 5;

if(a > 10 || b > 10) {
    console.log('At least one number is greater than 10');
}

if (hasPass || age >= 18) {
    console.log("Access granted to the general area.");
} else {
    console.log("Access denied to the general area.");
}

//not
const number = 5;

if(number%2 != 0) {
    console.log('odd');
}


if (!hasPass) {
    console.log("You do not have a pass.");
} else {
    console.log("You have a pass.");
}


//Example 2:
let isWeekend = true;
let isSunny = true;


if (isWeekend && isSunny) {
    console.log("It's a great day for a picnic!");
} else {
    console.log("Maybe stay indoors today.");
}


if (isWeekend || isSunny) {
    console.log("At least one of the conditions is true.");
} else {
    console.log("Neither condition is true.");
}


if (!isSunny) {
    console.log("It's not sunny today.");
}

//Example 3:
let isStudent = true;
let hasIdCard = true;


if (isStudent && hasIdCard) {
    console.log("Give discount.");
} else {
    console.log("Don't give discount.");
}


if (isStudent || hasIdCard) {
    console.log("Give discount.");
} else {
    console.log("Don't give discount");
}


if (!isStudent) {
    console.log("Not a student. So, no discount.");
} else {
    console.log("Give discount.");
}

//Example 4:
let isSenior = true;
let isMember = true;

if (isSenior && isMember) {
    console.log("Person is eligible for the senior member discount.");
} else {
    console.log("Person is not eligible for the senior member discount.");
}

if (isSenior || isMember) {
    console.log("Person is eligible for the general discount.");
} else {
    console.log("Person is not eligible for the general discount.");
}

if (!isSenior) {
    console.log("Person is not a senior.");
} else {
    console.log("Person is a senior.");
}




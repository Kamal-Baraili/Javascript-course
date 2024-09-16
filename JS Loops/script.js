//Loops in JS

//for loop -> Use when exact number of iterations to fulfill the conditions is known

for(let i=1; i<=10; i=i+1) {
    console.log('Kamal' + i);
}

//while loop -> use when you know the conditions however exact number of iterations to fulfill the conditions is not known
let ip = 0;
let house = 10;

while(ip != house) {
    ip = ip + 1;
    console.log('step taken' + ip);
}

//do while loop->same as while loop, however you want to execute the block of code in the loop at least once

let ip2 = 0;
let house2 = 5;

do {
    console.log('step taken' + ip2);
    ip2 = ip2 + 1;
} while(ip2 <= house2)

//Example 1: Print even numbers from 1 to 20

//using for loop
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//using while loop
var i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

//using Do while loop
var i = 2;
do{
    console.log(i);
    i += 2;
} while(i <= 20)

    
//Example 2: Factorial

//using for loop
var number = 5;
var factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(factorial);

//using while loop
var number = 5;
var factorial = 1;
var i = 1;

while(i <= number) {
    factorial *= i;
    i++;
}

console.log(factorial);

//using do while loop
var number = 5;
var factorial = 1;
var i = 1;

do{
    factorial *= i;
    i++;
} while ((i <= number))

console.log(factorial);

//Example 3: Pattern
const char = '*';
const count = 5;
pattern = '';

for (let i = 1; i <= count; i++) {
    for (let j = 1; j <= i; j++){
        pattern += char;
    }
    console.log(pattern);
    pattern = '';
    console.log('\n');
}


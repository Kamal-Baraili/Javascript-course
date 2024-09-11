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


// JS datatypes and operators

//Numbers

let num1 = 5;

let num2 = 1.5;

let num3 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num3 % num1); //modular division gives you remainder of the division

//Strings

const firstName = "Kamal"; // we can use either single quote '' or double quote ""
const lastName = "Baraili";

console.log(firstName + " " + lastName);

console.log(`Hi my name is ${firstName} ${lastName}`);
console.log(firstName[3]);
console.log(firstName.length)

let fullName = new String('Kamal Baraili');

//Methods in strings
  //.length
  console.log(fullName.length);

  //.concat
  let Name = firstName.concat(lastName);
  console.log(Name);

  //.toUpperCase() and .toLowerCase()
  console.log(firstName.toUpperCase());
  console.log(firstName.toLowerCase());

  //.charAt()
  console.log(firstName.charAt(3));

  //.indexOf()
  console.log(firstName.indexOf('l'))

  //.subString()
  console.log(firstName.substring(0, 4));

  //.slice()
  console.log(firstName.slice(-4, 4));

  //.trim()
  const newString = "    Kamal     ";
  console.log(newString);
  console.log(newString.trim());

  //.replace()
  const url = "https://Kamal.com/Kamal%20Baraili";
  console.log(url.replace('%20', '-'));

  //.includes()
  console.log(url.includes('Kamal')); //true
  console.log(url.includes('Baraili')); //true
  console.log(url.includes('baraili')); //false

  //.split()
  const gName = "Kamal-Baraili-Com";
  console.log(gName.split('-'));
  
  //.search()
  console.log(gName.search('Baraili'));

//Booleans

let isLoggedIn = true;
console.log(isLoggedIn);
//true -> 1
//false -> 2
console.log(isLoggedIn + 10) //The output will be 11 because the value of true is 1

//Null -> Space is used by null
let lastLoginDate = null;
console.log(lastLoginDate);

//undefined -> space is not used
let und;
console.log(und);

//Objects
const person = {
  firstName: "Kamal",
  lastName: "Baraili",
  age: 25,
  isLoggedIn: true,
};

console.log(person);
console.log(person.firstName + " " + person.lastName); //single property could be accessed by using dot (.)


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
var un;
console.log(un);

//null
let n = null;
console.log(n);


//Bonus

console.log(1 + 1) //Output is 2 because both are numbers datatype

console.log('1'+'1') //Output is 11 because both are strings and are concatenated using plus sign

console.log('1' + 11) //Output is 111 because even though 11 is number it is concatenated to the first 1 which is a string
                    //and the output as a whole will be a string

console.log('1' * 12) //Output is 12 however the output is a number not string

console.log('a' * 1) //Output is NaN because alphabet cannot be multiplied with a number

console.log('a' + 1) //Output is a1 as they are concatenated


//Typeof Operator
console.log(typeof ('1' * 12)) //Output is number
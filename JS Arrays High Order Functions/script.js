//JS ARRAYS HIGH ORDER FUNCTIONS

// .foreach() //takes call back function as an argument
const students = ["John", "Mike", "Jane"]

students.forEach(val => console.log(val)); //.forEach doesn't return anything

// .map() ////takes call back function as an argument

students.map(val => console.log(val)); // .map returns an array

// .find and .findIndex
const numbers = [1, 2, 3, 4, 5, 6, 7]

let ans1 = numbers.find(num => num===4) //finds the number
console.log(ans1);

let ans2 = numbers.findIndex(num => num===4) //finds index of the number
console.log(ans2);

// .includes()

console.log(numbers.includes(6)); //returns boolean value

//.filter

const newArr = numbers.filter(num => num %2 == 0);
console.log(newArr);

//.slice() ----> slices the required number of elements
let newArr2 = numbers.slice(1,5); //It will ignore the element with the index 5
console.log(newArr2); 

//.splice() ------>similar to slice but it deletes the selected elements from the original array
console.log(numbers);
let newArr3 = numbers.splice(1,4);
console.log(newArr3);
console.log(numbers); //the spliced elements are deleted from this array





//Arrays
const students = ["John", "Jane", "Mike"];
console.log(students);
console.log(students[2]);
console.log(students.length);

students[1] = "Bill"; //eventhough we are using const here we can change th values inside the student array
console.log(students);

//pushing the value in array
students.push("Alexa");
console.log(students);
console.log(students.length);

//Arrays in JS suppors heterogeneous values
const myArray = [1, true, "Hi", "👍"]
myArray.push({name: "Kamal"});
console.log(myArray);
console.log(myArray.indexOf("Hi"));

//Example 1: Accessing elements of an Array
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]);

//Example 2: Popping element from an array
let vehicles = ['car', 'bike', 'truck'];
vehicles.pop();
console.log(vehicles);

//Example 3: Modifying the elements of an array
let colors = ['red', 'green', 'blue'];
colors[1] = 'yellow';
console.log(colors);

//Example 4: Looping an array
let names = ['Alice', 'Bob', 'Charlie'];
for (let i = 0; i < names.length; i++) {
    console.log("Hi" + names[i]);
}




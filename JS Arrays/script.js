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

//Example 1:
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]);

//Example 2:
let vehicles = ['car', 'bike', 'truck'];
vehicles.pop();
console.log(vehicles);




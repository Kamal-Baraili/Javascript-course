//Promises in JS
// Create a promise
const myPromise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Handle the promise
myPromise.then(result => {
        console.log(result); // Handle the resolved value
    })
    
myPromise.catch(error => {
        console.error(error); // Handle the error or rejected value
    });


//Using Async and await
let a = 10;
let b = 20;

let result = a + b;

async function getData() { 
    try {
    let resultFromServer = await fetch (
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(await resultFromServer.json());
    }
    catch (error) {
        console.error(error);
    }
}

getData();
console.log(result);
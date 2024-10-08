//Iterators

function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if(iterationCount < end){
                result = { value: nextStart, done: false }
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }

            return { value: iterationCount, done: true }
        }
    }
}

const myIterator = makeIterator(1, 10, 1);

let result = myIterator.next();

while(!result.done) {
    console.log(result.value);
    result = myIterator.next();
}

//Generator function and yield keyword

function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

const even = count();

for (const v of even) {
    console.log(v);
}

//Another Example 

function* makeMyIterator(start, end, stepSize = 1) {
    for (let i = start; i <= end; i+=stepSize) {
        yield i;
    }
}

const btn = document.getElementById("my_btn");
const likes = document.getElementById("likes");
let one = makeMyIterator(1, 100, 1);

likes.innerText = "0";

btn.addEventListener("click", () => {
    likes.innerText = one.next().value;
})
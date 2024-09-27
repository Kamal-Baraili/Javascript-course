function main(name) {
    function sayMyName() {
        console.log(name);
    }
    
    return sayMyName;
}

let consoleKamal = main("Kamal");

consoleKamal();
consoleKamal();
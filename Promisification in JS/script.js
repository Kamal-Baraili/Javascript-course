//Promisification

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if(error) return reject(error);
                return resolve(result);
            })

        })
    }
}

//Without Promise
function loadScript(src, callback) {
    const script = document.createElement("script");

    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = (err) => callback(err);

    document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);

(async () => {
    try {
        const result = await loadScriptNew("test.js");
        console.log("Done");
    }

    catch {
        console.log("Error loading");
    }
})();

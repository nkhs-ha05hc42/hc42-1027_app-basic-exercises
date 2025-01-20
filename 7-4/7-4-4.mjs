function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

function add(a, b) {
    return a + b;
}

function executeWithDelay(callback, delay) {
    setTimeout(callback, delay);
}


function main() {
    executeWithDelay(() => {
        console.log(`start at ${getCurrentTime()}`);
    }, 0);

    
    executeWithDelay(() => {
        const result = add(1, 99); 
        console.log(`Result: ${result} at ${getCurrentTime()}`);
        console.log(`end at ${getCurrentTime()}`);
    }, 2000);
}
main();

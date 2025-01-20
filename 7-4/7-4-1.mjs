function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}


function executeWithDelay(callback, delay) {
    setTimeout(callback, delay);
}
console.log('start');

executeWithDelay(() => {
    console.log(`★ at ${getCurrentTime()}`);
}, 10000);

executeWithDelay(() => {
    console.log(`◆ at ${getCurrentTime()}`);
}, 20000);

console.log('end');

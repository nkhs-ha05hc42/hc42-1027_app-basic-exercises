function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}
function executeWithDelay(callback, delay) {
    setTimeout(callback, delay);
}

function main() {
    executeWithDelay(() => {
        console.log(`start at ${getCurrentTime()}`);
    }, 0);


    executeWithDelay(() => {
        console.log(`★ at ${getCurrentTime()}`);
        executeWithDelay(() => {
            console.log(`◆ at ${getCurrentTime()}`);
        }, 3000);
        executeWithDelay(() => {
            console.log(`end at ${getCurrentTime()}`);
        }, 5000);
    }, 2000);
}
main();

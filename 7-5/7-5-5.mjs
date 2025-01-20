function func1() {
    return new Promise((resolve) => {
        resolve("Test1");
    });
}
function func2() {
    return new Promise((resolve) => {
        resolve("Test2");
    });
}
function func3() {
    return Promise.all([func1(), func2()]).then((results) => {
        return results[0] + results[1]; 
    });
}
function main() {
    func3()
        .then((result) => {
            console.log(`func3 result: ${result}`); 
        })
        .catch((error) => {
            console.error(`Error: ${error}`); 
        });
}
main();

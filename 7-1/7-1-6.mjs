function Over100(value) {
    console.log(value);
    if (value <= 100) {
        Over100(value * 2);
    }
}

console.log("10");
Over100(10);

console.log("25");
Over100(25);

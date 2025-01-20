const values = ["A", "B", "A", "C", "D", "A"];
const valueSet = new Set();

for (const value of values) {
    valueSet.add(value);
}

for (const value of valueSet) {
    console.log(value);
}

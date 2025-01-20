const values = ["A", "B", "A", "C", "D", "A"]
const valueSet = new Set()
for (const value of values) {
valueSet.add(value)
}
console.log(valueSet)
console.log(Array.from(valueSet.values()))
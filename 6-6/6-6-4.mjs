const objectArray1 = [
    {
        key: "A",
        value: "カレー",
    },
    {
        key: "B",
        value: "定食",
    },
];


const map1 = new Map(objectArray1.map(object => [object.key, object.value]));
map1.delete("A");
const valueA = map1.get("A");
const hasA = map1.has("A");
console.log(`Key: A, Value: ${valueA}, Exists: ${hasA}`);


const valueB = map1.get("B");
const hasB = map1.has("B");
console.log(`Key: B, Value: ${valueB}, Exists: ${hasB}`);


let sum = 0; 
let loopCount = 0; 

for (let i = 1; i <= 100; i++) {
    loopCount++; 
    if (i % 2 === 0) { 
        sum += i; 
    }
    if (sum > 50) { 
        console.log(`ループ回数: ${loopCount}, 合計: ${sum}`);
        break; 
    }
}

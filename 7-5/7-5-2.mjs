// 現在の時刻を取得する関数
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// 指定時間後にPromiseを解決する関数
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// メイン処理
async function main() {
    // startの非同期出力
    console.log(`start at ${getCurrentTime()}`);
    console.log(`end will appear later...`);

    // 2秒後に★を出力
    await delay(2000);
    console.log(`★ at ${getCurrentTime()}`);

    // 3秒後に◆を出力
    await delay(3000);
    console.log(`◆ at ${getCurrentTime()}`);

    // ◆の2秒後にendを出力
    await delay(2000);
    console.log(`end at ${getCurrentTime()}`);
}

// 実行
main();

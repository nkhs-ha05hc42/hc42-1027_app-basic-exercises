
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }
  function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  async function execute() {
    console.log(`[${getCurrentTime()}] start`); 
    
    await delay(10);
    console.log(`[${getCurrentTime()}] ★`);

    await delay(10);
    console.log(`[${getCurrentTime()}] ◆`);
    
    console.log(`[${getCurrentTime()}] end`); 
  }
  execute();
  
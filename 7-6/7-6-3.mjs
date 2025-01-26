
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }
  
 
  function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  
  
  async function execute() {
    console.log(`[${getCurrentTime()}] start`); 
    await delay(2);
    console.log(`[${getCurrentTime()}] ★`);
    
    await delay(3);
    console.log(`[${getCurrentTime()}] ◆`);
    await delay(2); 
    console.log(`[${getCurrentTime()}] end`);
  }
  execute();
  
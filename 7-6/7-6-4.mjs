
function func1() {
    return new Promise((resolve) => {
      resolve("Test1");
    });
  }

  function func2(input) {
    return new Promise((resolve) => {
      resolve("New" + input);
    });
  }
  
  async function execute() {
    try {
   
      const result1 = await func1();
      console.log("func1 result:", result1); 

      const result2 = await func2(result1);
      console.log("func2 result:", result2); 
    } catch (error) {
      console.error("Error:", error);
    }
  }
  execute();
1  
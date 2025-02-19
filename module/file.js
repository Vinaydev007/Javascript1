// Synchronous code
console.log("Task 1: Start");

// Simulate a time-consuming task
function syncTask() {
  for (let i = 0; i < 1e9; i++) {}  // Busy-wait loop
  console.log("Task 2: Time-consuming task done");
}

syncTask();
console.log("Task 3: End");

// Output:
// Task 1: Start
// Task 2: Time-consuming task done
// Task 3: End

function demo(){
    console.log("i am demo")
}

function demo1(){
    setTimeout(() => {
        console.log("i am demo1")
    },3000);
}
demo1();
demo();
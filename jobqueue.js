//callback queue - task queue
setTimeout(() => {
  console.log("timeout");
}, 10);

//Job Queue - Microtaks Queue -> has more priority than callback queue
Promise.resolve("hi").then((data) => console.log("data", data));

console.log("Hi I run first ");

//event loop checks job queue first before it chechs the task queue
// priority: job queue > task queue

//1. Hi I run first -> simple console.log
//2. hi -> promise
//3. timeout -> setTimeotu

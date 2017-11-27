// First async program

console.log("Starting app");
setTimeout(() => console.log("Inside callback"), 1000);
setTimeout(() => console.log("Inside second callback"), 0);
console.log("Finishing app");

// logs => Notice how the last console log is processed before the last setTimeout() call even though we have set it to execute with 0 delay. It appears weird, but this is how node processes event loop
// Starting app
// Finishing app
// Inside second callback
// Inside callback

// -------------------------------------------------
// Call Stack and Event Loop
// -------------------------------------------------

// What happens behind the scenes in V8, and Node when an async program runs?

// 1. Call Stack
// 2. Node APIs
// 3. Callback Queue
// 4. Event Loop

// -------------------------------------------------
// Call Stack
// -------------------------------------------------

// Part of V8.
// The only thing that is needed for synchronous programs.It is a simple data structure (stack) that keeps track of function execution inside V8.
// You can only 2 things on call stack => 1. Add an item to the top. 2. Remove an item from the top
// The first item that is pushed onto Call Stack is the main() function. Remember the wrapper function you saw while debuggin node programs in console? Yeah, that's the main() function.
// When you call a function, it is added on top of Call Stack. When the function returns, it is removed from the Call Stack.
// It can execute one statement at a time

// -------------------------------------------------
// Node APIs
// -------------------------------------------------

// setTimeout() is a Node API. It doesn't exist in V8.
// When you call a Node API, the Call Stack registers a pair of event and callback in 'Node API' region, removes the statement from the stack and continues its execution. In setTimeout(), the event is waiting for milliseconds specified.
// When an event occurs, the corresponding callback is moved to the Callback Queue

// -------------------------------------------------
// Event Loop
// -------------------------------------------------

// It takes a look at the Call Stack.
// If it is not empty, it does nothing
// If it is empty, it checks the callback queue. If there are any functions waiting to be executed, it moves the first callback function in the Callback Queue into the Call Stack

// -------------------------------------------------
// Callback Queue
// -------------------------------------------------

// Queue of all the callback functions ready to get fired
// All the callback functions will be waiting until the Call Stack is empty

// TODO: Add links to articles that exlain event loop

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

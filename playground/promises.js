const promise = new Promise((resolve, reject) => {
    // Do all the async stuff here
    // resolve('Boom Boom!!');
    setTimeout(() => reject('Nah'), 2000);
});

promise.then((message) => console.log(message), (error) => console.log(error));

console.log('End');

// Advantages of promises:
// You cannot resolve/reject a promise twice, whereas you can call a callback twice. Using promises prevents this kind of accidental errors.
// Once a promise is resolved/rejected, all the following resolve/reject calls are ignored.
// Separate functions for handling success, and failure

// A promise can be in 2 states => 
// 1. fullfilled => either resolved, or rejected
// 2. pending
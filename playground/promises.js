// const promise = new Promise((resolve, reject) => {
//     // Do all the async stuff here
//     // resolve('Boom Boom!!');
//     setTimeout(() => reject('Nah'), 2000);
// });

// promise.then((message) => console.log(message), (error) => console.log(error));

// console.log('End');

// Advantages of promises:
// You cannot resolve/reject a promise twice, whereas you can call a callback twice. Using promises prevents this kind of accidental errors.
// Once a promise is resolved/rejected, all the following resolve/reject calls are ignored.
// Separate functions for handling success, and failure

// A promise can be in 3 states => 
// 1. fullfilled
// 2. rejected
// 3. pending
// settled => either fullfilled or rejected

// Lecture 37

const asyncAdd = (a, b) => {
    // return a new promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(5, 24)
    .then((sum) => {
        console.log('Sum:', sum);
    })
    .catch(error => {
        console.log(error);
    });

// Chaining promises => return a new promise inside the success handler

asyncAdd(2, 4)
    .then((result) => {
        console.log(result);
        // asyncAdd(result, 30); => when you do this, then() returns undefined (default return value)
        return asyncAdd(result, '30'); // return a new promise
    })
    .then((sum) => {
        console.log('Sum:', sum);
    })
    .catch((error) => {
        console.log(error);
    });  // handle error if any of our promises fail

/* 
    When you provide an error handler to then():
        In case the promise fails, it will run the error handler, and call the success handler for the next then() chained to it.
    If you do not want to run the chained then() when the promise fails, don't provide an error handler to then(), handle the error in catch()
        More info => 9:00 in lecture 37
*/
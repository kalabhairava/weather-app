// -------------------------------------------------
// Callback Functions
// -------------------------------------------------

// A callback funtction is a function that is passed as an argument to a function and executed after some event occurs.
// It is a general definition, there is no strict definition in JS.

const getUser = (id, callback) => {
  const user = {
    id: id,
    name: "kalabhairava"
  };

  setTimeout(() => callback(user), 3000);
};

// Pass the callback
getUser(69, user => {
  console.log(`Id: ${user.id}, Name: ${user.name}`);
});

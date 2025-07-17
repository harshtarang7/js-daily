// .then => resolve
// promise has three state, resolve, rejected, pending
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("ASYNC TASK IS COMPLETED");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("PROMISE CONSUMED");
});

// all  in one

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("ASYNC TASK IS finished");
    resolve();
  }, 1000);
}).then(function () {
  console.log("PROMISE2 CONSUMED");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "tarang", email: "onlyfuns@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// using reject
// avoiding call back hell
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ userName: "tarang", password: "123" });
    } else {
      reject("ERROR Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((name) => {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolved or rejected"));

// using async await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "harsh", password: "233" });
    } else {
      reject("ERROR Something went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

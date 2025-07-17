// .then => resolve
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

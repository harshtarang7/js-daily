// functions questions

// add 10 to any number
function add10(value) {
  return value + 10;
}
// console.log(add10(10)) // 20

// greeting and returns another functions that says name

function greet() {
  const message = "hello";
  return function name(name) {
    console.log(`${message} ${name}`);
  };
}

const nameGreet = greet();
nameGreet("tarang"); // hello tarang

// Make a function that returns another function which multiplies two numbers
function multiplyWith(a) {
  function multiplyBy(b) {
    return a * b;
  }
  return multiplyBy;
}

const multi = multiplyWith(2);
console.log(multi(4));

// Create a counter function that increases a number every time you call it.

function counterRepeat() {
  let num = 0;
  return function () {
    return num++;
  };
}
const counter = counterRepeat();
console.log(counter());
console.log(counter());
console.log(counter());

// Make a calculator function that returns multiple operations (add, subtract) as functions inside.

function operations(a, b) {
  function add() {
    return a + b;
  }
  function sub() {
    return a - b;
  }
  function multi() {
    return a * b;
  }
  return { add, sub, multi };
}

const add = operations(5, 3);
// console.log(add.add()) // 8
// console.log(add.sub()) //2
// console.log(add.multi()) //15

// Create a private bank account system:
// You should be able to deposit, withdraw, and check balance.
// But no one can directly change the balance from outside.

function bankSystem() {
  let balance = 0;
  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: ₹${amount}`);
      } else {
        console.log("must be positive");
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ₹${amount}`);
      } else {
        console.log("Invalid amount");
      }
    },
    checkbalance() {
      console.log(`current balance: ${balance}`);
      return balance;
    },
  };
}

const myAccount = bankSystem();

myAccount.deposit(10000);
myAccount.withdraw(2983);
myAccount.checkbalance();

// Build a "once" function:

function once(func) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      func();
    }
  };
}

function greetings() {
  console.log("Hello World!");
}

const greetOnce = once(greetings);

greetOnce();
greetOnce();
greetOnce();

// register event on fucntion call and then call the event
let eventHandler;
let eventHandlers = {};
function onEvent(handler) {
  eventHandler = handler;
}

function triggerEvent() {
  if (eventHandler) {
    eventHandler();
  } else {
    console.log("no event handler registered");
  }
}

onEvent(function () {
  console.log("event registered");
});

triggerEvent();

function onEvents(eventName, handler) {
  eventHandlers[eventName] = handler;
}
function triggerEvents(eventName) {
  const handler = eventHandlers[eventName];
  if (handler) {
    handler();
  } else {
    console.log(`No handler registered for "${eventName}" event.`);
  }
}

onEvents("click", function () {
  console.log("clicked");
});

onEvents("add", function () {
  console.log("added");
});

triggerEvents("add");
triggerEvents("click");

// Create a function that checks if a number is even.

function checkEven() {
  function checking(value) {
    if (value%2=== 0) {
      return`${value} is even`;
    } else {
      return `${value} is odd`;
    }
  }
  return checking;
}

const even = checkEven()

console.log(even(2))
console.log(even(23))



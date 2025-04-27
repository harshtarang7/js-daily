// closures
// it means that a function bind or bundled together with its lexical environment , it forms a closure
// 1-
function outer() {
  let name = "tarang";
  function inner() {
    console.log("inner", name);
  }
  inner();
}

outer(); // inner tarang

// 2-
function outer2() {
  let name = "tarang";
  return function inner() {
    console.log("inner2", name);
  };
}
const greet = outer2();
greet(); // inner tarang

// INCREMENT BY 1
function secret(initialValue) {
  return function getIncrement() {
    return initialValue++;
  };
}

const inc = secret(10);
console.log(inc());
console.log(inc());
console.log(inc());

// once function

function once(fun) {
  let called = false;
  return function isCalledOnce() {
    if (!called) {
      called = true;
      fun();
    }
  };
}

const name = function(){
    console.log('hello tarang')
}
const oneCall = once(name)
oneCall()
oneCall()



// once password
function oncePassword(value){
    let isCalledOnce = false
    return function isCalled(){
        if(!isCalledOnce){
            isCalledOnce = true
            return value
        }
        else{
            return 'expired'
        }
    }
}

const onePass = oncePassword('tarang')
console.log(onePass())
console.log(onePass())
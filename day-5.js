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


// adder with base

function adder(value){
    return function isAdded(value2){
        return value+value2
    }
}

const add = adder(10)
console.log(add(10))
console.log(add(20))



// private counter

function privateCounter(a,maxValue){
    function increment(){
        if(a>=maxValue && maxValue !== undefined){
            return 'max limit is reached'
        }
        a= a+1
        return a
    }
    function decrement(){
        a = a-1
        return a
    }
    function getValue(){
        return a;
    }
    function reset(){
        a=0
        return a
    }
    function setValue(value){
        a=value
        return value
    }

    return {
        increment,
        decrement,
        getValue,
        reset,
        setValue,
    }
}


const counter = privateCounter(10,15);
console.log(counter.increment()) //11
console.log(counter.increment()) //12
console.log(counter.increment()) //13
console.log(counter.increment()) //14
console.log(counter.increment()) //15
console.log(counter.increment()) // max limit reached
console.log(counter.decrement()) //10
console.log(counter.decrement())// 9
console.log(counter.getValue()) //9
console.log(counter.reset()) // 0
console.log(counter.setValue(100)) // 100
console.log(counter.getValue())// 100

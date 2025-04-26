// functions questions 

// add 10 to any number
function add10(value){
    return value+10
}
// console.log(add10(10)) // 20


// greeting and returns another functions that says name

function greet(){
    const message = 'hello'
    return function name(name){
        console.log(`${message} ${name}`)
    }
}

const nameGreet = greet()
nameGreet('tarang') // hello tarang


// Make a function that returns another function which multiplies two numbers
function multiplyWith(a){
    function multiplyBy(b){
        return a * b;
    }
    return multiplyBy
}

const multi = multiplyWith(2);
console.log(multi(4))
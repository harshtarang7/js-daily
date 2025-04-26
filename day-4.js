//lexical scope
// 1- it refers how the variable scope is determined  by the structure of the code.
// 20- it means where the functions and variables are stored in the code (their location) because 
// In JavaScript, functions are executed using the scope they were defined in, not the scope they are called in.

function outer (){
    const outerVar = 'outer'

    function inner(){
        console.log(outerVar);
    }
    inner();
}
outer()

// inner() function can access outerVar because it was defined inside outer().
// Even though outerVar is not inside inner(), because of lexical scope, it can still use it.



// we will get reference error as the message is in another function and we are using it in different function which is not in scope
function anotherOuter(){
    const message = 'hello from another outer'
}

function anotherInner(){
    console.log(message)
}

// anotherOuter()
// anotherInner()




function anotherNewOuter(){
    const message = 'new outer message'
    return function inner(){
        return console.log(message);
    }
}
const myInnerFunction = anotherNewOuter();
myInnerFunction()



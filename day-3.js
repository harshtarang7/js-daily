// functions 
// 1functions statement- creating a simple function with a name or keyword and parameters

function a(){
    console.log('a is called ')
}

a();

function doSum(a,b){
    const sum = a+b;
    return sum
}

console.log(doSum(10,5))


// 2- function expression- functions acts like a value 
// anonymous function assigned to a variable 
var sum = function(a,b){
    return a+b
}
console.log(sum(10,19))

// DIFFERENCE BETWEEN STATEMENT FUNCTION AND EXPRESSION IS "HOISTING"
// during the hoisting phase or memory creation the function is assigned to a 
// but in expression function b it is treated like any other variable.

// anonymous functions are not valid according to the ES specifications it will give an syntax error 
// but these are used when a function is used as a value just like in expression function 


// named function expression - same as expression function but name in anonymous

// expression
var expressionFunction= function(){         
    console.log('expression is called')     
}
expressionFunction();

// named expression - just added the name here in anonymoust function which is used as a value 
var namedExpressionFunction = function name(){
    console.log('expression named function is called')
}

namedExpressionFunction();

// parameter and arguments
// paremeter - it is a local variable, label , identifiers in a function scope which cannot be accessible outside of the function.
// arguments - when we call a function we pass values in that function which is known as an argument

// a and b here are paremeters and 2,3 are arguements 
function egParameter(a,b){
    return a*b
}
console.log(egParameter(2,3))



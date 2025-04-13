// topic 1 -variables
// print variables in log
var a = 5;
let b = 10;
const c = 20;

console.log(a,b,c)

// print sum of two variables
console.log(a+b+c) //35

// hoisting check
console.log(x)
var x = 5; // it will return undefined as the variable is defined after calling it 

// TEMPORAL DEAD ZONE
// console.log(x1)
// let x1 = 5; // it will return reference error  , as it is hoisted but not initialized

//topic 2 - data type
var name = "tarang"
var num = 123
console.log(typeof name,typeof num) // string , number

// undefined and null
let newa;
console.log(newa); // it will give undefined as we declared the variable but didn't gave the value

let newNull = null;
console.log(newNull) // we are telling JS that this variable exists but it is empty right now

console.log(typeof newa, typeof newNull) // it will give undefined and object in null(JS is weird)


// topic 3
let newVariable1 = 5;
let newVariable2 = 10;

// add
console.log(newVariable1 + newVariable2) // 15
// multiply
console.log(newVariable1 * newVariable2) // 50
// divide
console.log(newVariable2 / newVariable1) // 2
// sub
console.log(newVariable2 - newVariable1) // 5

// remainder
console.log(25 % 4) //1 =  25 / 4 = 6 and remaining value would be 1

// square
console.log(newVariable1 ** 2) // 25 = 5 * 5

// program takes a number and increases it by 1
newVariable1++ // it will add 1 and make it 11 after adding 5+5
console.log(newVariable1)

newVariable1-- // 10 as it was 11 decreases by 1 
console.log(newVariable1)

// assignment 
// add by 10
newVariable1+=10 // 15 = 5+10
console.log(newVariable1)

// multiply by 3
newVariable1*=2 // 30 = 15* 2
console.log(newVariable1)

// divide 
newVariable1 /= 2
console.log(newVariable1) // 15 = 30 divide by 2
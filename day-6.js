// map - reduce - filter
//1- double the array element
let arr = [1,2,3,4]

const doubleElement = arr.map((element)=>{
    return element * 2
})

// console.log(doubleElement) // [2,4,6,8]

// 2 - convert the strings into uppercase
let stringArr = ['apple', 'banana', 'cherry']

const uppercaseElement = stringArr.map((upper)=>{
    return upper.toUpperCase();
})

// console.log(uppercaseElement) //[ 'APPLE', 'BANANA', 'CHERRY' ]

// 3- adding 5 to every element

const add5 = arr.map((element)=>{
    return element + 5
})

// console.log(add5) // [ 6, 7, 8, 9 ]

const convertToString = arr.map((element)=>{
    return element.toString();
})

// console.log(convertToString) //[ '1', '2', '3', '4' ]


// prefix with element
const animals = ['cat', 'dog', 'bat'];

const pre = animals.map((element)=>{
    return `animal - ${element}`
})

console.log(pre)

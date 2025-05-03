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


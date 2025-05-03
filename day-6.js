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

// console.log(pre)


// square

const sq = arr.map((element)=>{
    return element * 2
})

// console.log(sq)  //[ 2, 4, 6, 8 ]


// return name array from array of objects
const names = [{name: 'tarang'}, {name: 'arjun'}];

const nameArray = names.map((element)=>{
    return element.name;
})

// console.log(nameArray)


// even / odd

const evenOrOdd = arr.map((element)=>{
    if(element%2 ===0){
        return `even : ${element}`
    }else{
         return `odd : ${element}`
    }
})
// console.log(evenOrOdd) //[ 'odd : 1', 'even : 2', 'odd : 3', 'even : 4' ]

const price = [100, 200, 300]
const discount = price.map((element)=>{
    return element / 10
})

// console.log(discount)

// replace '' with 'empty

const empArr = ['hello', '', 'world', '']

const empty = empArr.map((element)=>{
    if(element === ''){
        return `empty`
    }else{
        return element
    }
})

// console.log(empty)//[ 'hello', 'empty', 'world', 'empty' ]


// add +1 in age in the array of objects

const nameArr = [{name:'tarang', age:21}, {name:'arjun', age:25}]

const ageAdd = nameArr.map((element)=>{
    return element.age + 1
})

// console.log(ageAdd) //[ 22, 26 ]

// sum of sub array elements from nested array

const nestedArray = [[1,2], [3,4], [5,6]];

const nested = nestedArray.map((element)=>{
    return element.map((subArr)=>{
        return subArr+1
    })
})
// console.log(nested)  // [ [ 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]

// length of array string

const StringArray = ['one', 'two', 'three']

const len = StringArray.map((element)=>{
    return element.length
});

// console.log(len) //[ 3, 3, 5 ]


// double if it is even
const eve = arr.map((element)=>{
    if(element % 2 ===0){
        return element * 2;
    }else{
        return 0
    }
})

console.log(eve)
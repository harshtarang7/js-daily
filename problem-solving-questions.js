let a = "1";
let b = "1";

console.log(a+b) // "11"
console.log(+a + +b) // 2 , the + will convert string into number


// mystery array
let arr = [1,2,3]
arr[3] = 9
arr[10] = 99
console.log(arr.length) // 11
console.log(arr)    //[ 1, 2, 3, 9, <6 empty items>, 99 ]

// object or not
console.log(typeof null) // object

// check
console.log([] == ![])
//[]= true
//![] = false
// answer = true because it is loosely coupled


//reverse string
function reverseString (string){
    let newString = ""
    for(let i=string.length-1;i>=0;i--){
        newString += string[i]
    }
    return newString
}
console.log(reverseString("hello"))

// palindrome
// madam/madam = true
// hello/olleh = false

function palin(string){
    let fromLast =''

    for(let j=string.length-1;j>=0;j--){
        fromLast += string[j]
    }
    if(string !== fromLast){
        return 'not palindrome'
    }else{
        return `palindrome`
    }
}

console.log(palin("madam"))


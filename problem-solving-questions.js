let a = "1";
let b = "1";

console.log(a + b); // "11"
console.log(+a + +b); // 2 , the + will convert string into number

// mystery array
let arr = [1, 2, 3];
arr[3] = 9;
arr[10] = 99;
console.log(arr.length); // 11
console.log(arr); //[ 1, 2, 3, 9, <6 empty items>, 99 ]

// object or not
console.log(typeof null); // object

// check
console.log([] == ![]);
//[]= true
//![] = false
// answer = true because it is loosely coupled

//reverse string
function reverseString(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
console.log(reverseString("hello"));

// palindrome
// madam/madam = true
// hello/olleh = false

function palin(string) {
  let fromLast = "";

  for (let j = string.length - 1; j >= 0; j--) {
    fromLast += string[j];
  }
  if (string !== fromLast) {
    return "not palindrome";
  } else {
    return `palindrome`;
  }
}

console.log(palin("madam"));

// sum without using + /-
function sum(a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}

console.log(sum(2, 3)); // ➞ 5

// is anagram
function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // lowwercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //counting letters
  let count = {};
  for (i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (count[char]) {
      // if letter exist then we will increase the count
      count[char]++;
    } else {
      //if it is first then set to 1
      count[char] = 1;
    }
  }

  // with str2
  for (i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  //checking values are 0
  for (let key in count) {
    if (count[key] !== 0) return false;
  }
  return true;
}

console.log(anagram("harsh", "srhah"));

// group anagram check

function isGroupAnagram(arr) {
  let groups = {};

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let letterCount = {};

    // counting each letter in the word
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }

    let key = "";
    // using ASCII 'a' to 'z'
    for (let c = 97; c <= 122; c++) {
      let char = String.fromCharCode(c);
      if (letterCount[char]) {
        key += char + letterCount[char];
      }
    }

    // if the key is same then group the similar words
    if (groups[key]) {
      groups[key].push(word);
    } else {
      groups[key] = [word];
    }
  }

  //converting obj into array
  let result = [];
  for (let group in groups) {
    result.push(groups[group]);
  }

  return result;
}

console.log(isGroupAnagram(["sar", "ras", "harsh", "sarha"]));

function isMax(arr) {
  if (arr.length < 2) return false;
  let isMaxNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isMaxNumber < arr[i]) {
      isMaxNumber = arr[i];
    }
  }
  return isMaxNumber;
}

console.log(isMax([1, 29, 3, 499, 59, 78, 2, 8, 9]));

// counting vowels
function isVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    for (let j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        vowelCount++;
      }
    }
  }

  return vowelCount;
}

console.log(isVowel("harish"));

function isFactorial(input) {
  let f = 1;
  for (let i = 1; i <= input; i++) {
    f = f * i;
  }
  return `fact: ${f}`;
}

console.log(isFactorial(3));

function isLeapYear(year) {
  if (year % 4 === 0) {
    return "leap";
  } else {
    return "not leap";
  }
}
console.log(isLeapYear(2024));

function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// fizzbuzzz
function fizzBuzz() {
  for (i = 1; i <=100; i++) {
    if(i%5===0 && i%3 === 0){
    console.log(i + 'fizzBuzz');
    }
    else if (i % 3 === 0) {
    console.log(i + 'fizz');
    }else if(i%5===0){
    console.log(i + 'buzz');
    }else{
        console.log(i)
    }
     
  }
}
// fizzBuzz();

// converting first letter into caps
function toUpperCase(str){
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(toUpperCase('harsh'))


// fibbonaci series
// input = 5 , O/P -> [0,1,1,2,3]

// each number is the sum of the two numbers before it 
// first term = 0
// secon term = 1
// third will be -> 0+1 = 1
// fourth will be -> 1+1 = 2
// fifth will be -> 1+2 = 3

function fibbonaci(num){
  let n1 = 0
  let n2 = 1;
  let series = [];

  for(let i=0; i<num; i++){
    series.push(n1)
    let nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
  return series
}
console.log(fibbonaci(4))


// removing duplicates 
function removeDuplicates(numArr){
  let empty = []
  for(let i=0;i<numArr.length;i++){
    if(!empty.includes(numArr[i])){
      empty.push(numArr[i])
    }
  }
  return empty
}

console.log(removeDuplicates([1,2,3,4,5,6,7,7,7,8,8]));
console.log(removeDuplicates([1,1,1,1,1]));
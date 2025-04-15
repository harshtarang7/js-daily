// topic 1 - if
// check if number is negative or positive
// it will check that if number is greater than 0 or positive
let checkNumber = 20;
if (checkNumber > 0) {
  console.log("number is positive");
}

// topic 2 -if else
// check number is even or odd
let evenOrOdd = 23;

if (evenOrOdd % 2 === 0) {
  console.log(`even:${evenOrOdd}`);
} else {
  console.log(`odd: ${evenOrOdd}`);
}

// topic 3 else if
//  greets the user based on the time of day
let currentTime = new Date();
console.log(currentTime);

if (currentTime > 6) {
  console.log("good morning");
} else if (currentTime > 12) {
  console.log("good afternoon");
} else if (currentTime > 19) {
  console.log("good evening");
}else{
    console.log('good night');

}

// topic 4 for loop
// print numbers 1-10
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// print even numbers from 2-20
for (i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`even:${i}`);
  }
}

// array 1
// doubles
const doubles = (arr) => {
  return arr.map((item) => item * 2);
};
console.log(doubles([1, 2, 3, 4, 5]));

// reverse array without for,map,for each

const reverseArray = (arr) => {
  if (arr.length === 0) return [];
  return [arr.pop(), ...reverseArray(arr)];
};
console.log(reverseArray([1, 2, 3, 4, 5]));

//capital letter in first
const firstCapital = (arr) => {
  return arr.map((item) => item.slice(0, 1).toUpperCase() + item.slice(1));
};
console.log(firstCapital(["tarang", "harsh"]));

// removing falsy values
function cleanFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(
  cleanFalsyValues(["tarang", "", false, 32, null, "harsh", undefined])
);

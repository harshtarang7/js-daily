// shallow vs deep copy
// shallow it created new object with top level properties copied but if a property is reference type (object or array )
// it will still point to the same memory

const original = {
    name:'tarang',
    dog:{
        breed:"indian spitz",
        age:3
    }
};

// it will copy the original obj
const shallow = {...original}

// it will only affect the copy
shallow.name = 'Top-dawg';

// it will affect both
shallow.dog.age = 5;

console.log(original.name)  //'tarang'
console.log(original.dog.age) // 5
console.log(shallow.name) // Top-dawg
console.log(shallow.dog.age) // 5

// the new object inside the original still points to the same


// deep copy 
// it duplicates erverything , including nested objects into a completely new memory reference not shared ones.


const originalObject = {
    name:'tarang',
    dog:{
        breed:"indian spitz",
        age:3
    }
};
// modern js 
const deepCopy = structuredClone(originalObject)
deepCopy.dog.age = 6
console.log(originalObject.dog.age) //3
console.log(deepCopy.dog.age) //6


// in older js we use this 
// const deepCopy = JSON.parse(JSON.stringify(original))

// structured clone is use to deep copy the object with structured clone algorithm in JS 

// another example 
const mushrooms1 ={
    anna : ["muscaria", "virosa"]
}

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.anna.push("pantherina");
mushrooms1.anna.pop();

console.log(mushrooms1) //{ anna: [ 'muscaria' ] }
console.log(mushrooms2) //{ anna: [ 'muscaria', 'virosa', 'pantherina' ] }
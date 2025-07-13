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


// How can you prevent an object from being modified (properties added/removed/changed)?

const obj = {name:"tarangHarsh"};
Object.preventExtensions(obj);

// it will stop adding new property
obj.age = 24;
// it will allow modification
obj.name = 'TOPDAWG'
console.log(obj);

// seal

// seal it will stop adding and deleting properties
Object.seal(obj);

obj.name = 'T-man'; // it will work 
delete obj.name; // won't work
obj.age = 23 //won't work

console.log(obj);

//freeze : it will fully freeze the object



Object.freeze(obj) // will ignore 
obj.name = 'bigT'; //  will ignore 
obj.age = 23; // wil ignore 
delete obj.name;

console.log(obj)


// preventExtension
// object.preventExtension will make sure we cannot add  new properties to an object
// but still allows delete and changing values 

// Seal
// it will stop adding and deleting properties but it will allow changing the values

// freeze
// it will fully lock the object we cannot add, modify, udpate, delete anything 

// custom clone without inbuilt library

function deepClone(obj){
    if(obj === null || typeof obj !== 'object') return obj;

    // handling date
    if(obj instanceof Date) return new Date(obj);

    // handle array
    if(Array.isArray(obj)){
        return obj.map(item=>deepClone(item));
    }

    // handling object
    const clone = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone 
}

// using custom clone in our function 

const objOriginal = {
    name:'tarang',
    tags:["js","react"],
    meta:{
        joined:new Date("2020-01-01"),
        likes:5000
    }
};

const clonedObject = deepClone(objOriginal)
clonedObject.tags.push("GIGA-CHAD-DEV") 
clonedObject.meta.likes = 999


console.log(objOriginal.tags) //[ 'js', 'react' ]
console.log(clonedObject.tags) // [ 'js', 'react', 'GIGA-CHAD-DEV' ]
console.log(objOriginal.meta.likes) // 5000
console.log(clonedObject.meta.likes) // 999
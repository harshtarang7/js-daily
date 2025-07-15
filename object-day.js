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



// 
const a = {foo:"bar"};
const b = a;
// b.foo = "bax"

// it will show bax because we just gave reference to b of same object not cloning
console.log(a.foo) // bax

const shallowdata = {...a}
shallowdata.foo = 'bax'
console.log(a.foo) //bar - a is untouched
console.log(shallowdata.foo) // bax


// Can you loop over an object with for...of? If not, how would you iterate over key-value pairs in an object?
// for of won't work with object as they are iterable by default 

// to loop over key value
const objNew={
    name:'tarang',
    skill:'fullstack',
}

for(const [key,value] of Object.entries(objNew)){
    console.log(`${key}: ${value}`)
}

// 
const numObj = {a:1,b:2,a:3}
console.log(numObj) // 3

// destructuring :it allows us to unpack from an object into individual variables

const newUser = {
    name:'harsh',
    age:23,
    city:'Jodhpur'
}

const {name,city} = newUser;

console.log(name) //tarang
console.log(city) //Jodhpur

// alias in destructuring

const {age:userAge} = newUser;

console.log(userAge) // 23



// How do computed property names work in object literals?
// it allows us to dynamically use a variable or expression as the property name in an object literal using square brackets [].
const buildUser=(key1,value1,key2,value2)=>{
    let user ={
        [key1]:value1,
        [key2]:value2
    }
return user;
}

console.log(buildUser('name','tarang','city','jodhpur')) //{ name: 'tarang', city: 'jodhpur' }
console.log(buildUser('name','baba','age',25)) //{ name: 'baba', age: 25 }
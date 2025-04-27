// closures
// it means that a function bind or bundled together with its lexical environment , it forms a closure
// 1-
function outer(){
    let name ='tarang'
    function inner(){
        console.log('inner',name);
    }
    inner()
}
 
outer() // inner tarang

// 2-
function outer2(){
    let name ='tarang'
    return function inner(){
        console.log('inner2',name);
    }
}
const greet = outer2()
greet() // inner tarang


// INCREMENT BY 1
function secret(initialValue){
    return function getIncrement(){
        return initialValue ++
    }
    
}

const inc = secret(10)
console.log(inc())
console.log(inc())
console.log(inc())
// bind will tell JS This keyword is binded, and it makes this behave the way you want.
// It returns a new function with 'this' set to the value you provide.

// binding an object to a function
// referencing it using 'this'

const person={
    city:'jodhpur',
    cityName(){
        console.log(`from ${this.city}`);
        
    }
}

const newObj = person.cityName;
newObj(); 
//it will show undefined

const newOB = person.cityName.bind(person);
newOB() // jodhpur


// counter
function Counter(){
    this.count = 0

    setTimeout(function(){
        this.count++;
        console.log(this.count);
    }.bind(this),1000)
}

const c = new Counter()
console.log(c)


function sayHi() {
  console.log(this.name);
}

const user = { name: "Tarang" };
const admin = { name: "Admin" };

const hiUser = sayHi.bind(user);
const hiAdmin = hiUser.bind(admin);

hiAdmin();


// call will hold the reference 
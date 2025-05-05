// filter
const EmployeesList = ["tarang", "saurabh", "jimmy", "harsh"];
// find employees by name
function employeeByNameSearch(search){
    return EmployeesList.filter(emp=>emp === search)
}


// console.log(employeeByNameSearch('jimmy'))

const EmployeesStatus = [
    {name:"tarang", status:true},
    {name:"saurabh", status:true},
    {name:"jimmy", status:false},
    {name:"harsh", status:false},
];

function checkIsCompleted(){
    return EmployeesStatus.filter(emp=>emp.status === true)
}

console.log(checkIsCompleted())
// filter
const EmployeesList = ["tarang", "saurabh", "jimmy", "harsh"];
// find employees by name
function employeeByNameSearch(search) {
  return EmployeesList.filter((emp) => emp === search);
}

// console.log(employeeByNameSearch('jimmy'))


// filter by status
const EmployeesStatus = [
  { name: "tarang", status: true },
  { name: "saurabh", status: true },
  { name: "jimmy", status: false },
  { name: "harsh", status: false },
];

function checkIsCompleted() {
  return EmployeesStatus.filter((emp) => emp.status === true);
}

// console.log(checkIsCompleted())

// filter by joining date
const Employeesjoin = [
  { name: "tarang", status: true, joining_date: "2014-02-02" },
  { name: "saurabh", status: false, joining_date: "2018-07-22" },
  { name: "jimmy", status: false, joining_date: "2023-03-14" },
  { name: "harsh", status: true, joining_date: "2024-12-12" },
];

function checkJoiningDate(){
    return EmployeesDob.filter(emp=>emp.joining_date>'2019-01-01' && emp.status=== true)
}

// console.log(checkJoiningDate())

// filter by name regardless of case sensitivity

function searchByNameNoCaseSensitivity(search){
    return EmployeesList.filter(emp=>emp.toLowerCase() === search.toLowerCase())
}
console.log(searchByNameNoCaseSensitivity('TARANG'))
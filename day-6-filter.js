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

function checkJoiningDate() {
  return EmployeesDob.filter(
    (emp) => emp.joining_date > "2019-01-01" && emp.status === true
  );
}

// console.log(checkJoiningDate())

// filter by name regardless of case sensitivity

function searchByNameNoCaseSensitivity(search) {
  return EmployeesList.filter(
    (emp) => emp.toLowerCase() === search.toLowerCase()
  );
}
// console.log(searchByNameNoCaseSensitivity('TARANG'))

// filter available rooms between a start and end date.
const rooms = [
  { roomNo: 102, available: true, freeOn: "2025-02-12" },
  { roomNo: 201, available: true, freeOn: "2025-02-21" },
  { roomNo: 320, available: false, freeOn: "2025-01-14" },
  { roomNo: 123, available: true, freeOn: "2025-01-12" },
];

function isRoomAvailable(startDate, endDate) {
  return rooms.filter(
    (room) => room.freeOn > startDate && room.freeOn < endDate
  );
}

// console.log(isRoomAvailable("2025-02-12","2025-02-22"))

// Filter orders that are 'delivered' and paid via 'credit card' within the last 7 days.

const orders = [
  {
    orderNo: 102,
    paymentDone: true,
    paymentby: "Debit",
    paymentDate: "2025-05-01",
  },
  {
    orderNo: 201,
    paymentDone: true,
    paymentby: "Credit Card",
    paymentDate: "2025-05-04",
  },
  {
    orderNo: 320,
    paymentDone: false,
    paymentby: "UPI",
    paymentDate: "2025-05-01",
  },
  {
    orderNo: 123,
    paymentDone: true,
    paymentby: "COD",
    paymentDate: "2025-05-02",
  },
];

function checkOrdersPayment(paymentMode) {
  const currentDate = new Date();
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  return orders.filter((order) => {
    const orderDate = new Date(order.paymentDate);
    return (
      order.paymentDone === true &&
      order.paymentby === paymentMode &&
      orderDate >= sevenDaysAgo &&
      orderDate <= orderDate
    );
  });
}
console.log(checkOrdersPayment("Debit"));

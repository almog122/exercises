//using
const employeeMap = new Map();

const findEmployeeSalary = function (employeeID) {
  return employeeMap.get(employeeID).salary;
};

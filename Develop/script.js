// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const employeesArray = {
  firstNames: [],
  lastNames: [],
  salaries: [],
};

// Collect employee data
const collectEmployees = function () {
  const firstName = prompt("What is the employee's first name?");
  const lastName = prompt("What is the employee's last name?");
  const salary = parseFloat(prompt("What is the employee's salary"));

  return {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalaries = 0;

  for (let i = 0; i < employeesArray.salaries.length; i++) {
    totalSalaries += employeesArray.salaries[i];
  }

  const averageSalary = totalSalaries / employeesArray.salaries.length;

  console.log(
    `The average salary between our ${
      employeesArray.firstNames.length
    } employees is ${averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(
    Math.random() * employeesArray.firstNames.length
  );
  const randomEmployee = {
    firstName: employeesArray.firstNames[randomIndex],
    lastName: employeesArray.lastNames[randomIndex],
    salary: employeesArray.salaries[randomIndex],
  };

  console.log(
    `Congratulations, ${randomEmployee.firstName}, you won our random drawing contest!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.firstNames.length; i++) {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employeesArray.firstNames[i];
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employeesArray.lastNames[i];
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = employeesArray.salaries[i].toLocaleString(
      "en-US",
      {
        style: "currency",
        currency: "USD",
      }
    );

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  let addAnother = true;

  while (addAnother) {
    const employee = collectEmployees();
    employeesArray.firstNames.push(employee.firstName);
    employeesArray.lastNames.push(employee.lastName);
    employeesArray.salaries.push(employee.salary);

    addAnother = confirm("Would you like to add another employee?");
  }

  console.log("==============================");
  displayAverageSalary(employeesArray);
  console.log("==============================");
  getRandomEmployee(employeesArray);
  console.log("==============================");

  displayEmployees(employeesArray);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);

const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1998Tiger3!',
  database: 'employee_db',
});
const userQ = [{
  type: 'list',
  name: 'startQ',
  message: 'How would you like to proceed?',
  choices: ['View Departments', 'View Roles', 'View Employees', 'New Department', 'New Role', 'New Employee', 'Update Employee',],
}];
function question() {
  inquirer.prompt(userQ).then((userA) => {
    console.log(userA.startQ);
    let userInput = userA.startQ;
    if (userInput === 'View Departments') {viewDepartments();}
    if (userInput === 'View Roles') {viewRoles();}
    if (userInput === 'View Employees') {viewEmployees();}
    if (userInput === 'New Department') {newDepartment();}
    if (userInput === 'New Role') {newRole();}
    if (userInput === 'New Employee') {newEmployee();}
  });
}
question();
const viewDepartments = () => {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    question();
  });
};

const viewRoles = () => {
  db.query(
    'SELECT * FROM roles JOIN department ON roles.department_id = department.i',
    function (err, results) {
      console.table(results);
      question();
    }
  );
};
const viewEmployees = () => {
  db.query( "SELECT * FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id;",
    function (err, results) {
      console.table(results);
      question();
    }
  );
};
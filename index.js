const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_db',
});
const userQ = [{
  type: 'list',
  name: '',
  message: 'How would you like to proceed?',
  choices: ['View Departments', 'View Roles', 'View Employees', 'New Department', 'New Role', 'New Employee', 'Update Employee',],
}];

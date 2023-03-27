const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PASSWORD',
  database: 'employee_db',
});
const userQ = [{
  type: 'list',
  name: 'startQ',
  message: 'How would you like to proceed?',
  choices: ['View Departments', 'View Roles', 'View Employees', 'New Department', 'New Role', 'New Employee',],
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
  db.query('SELECT * FROM roles JOIN department ON roles.department_id = department.id;',
    function (err, results) {
      console.table(results);
      question();
    });
  };
const viewEmployees = () => {
  db.query( "SELECT * FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id;",
    function (err, results) {
      console.table(results);
      question();
    });
};
const newDepartment = () => {
  department = [
    { type: 'input',
      name: 'departrment',
      message: 'What department would you like to add?',
    },
  ];
  inquirer.prompt(department).then((userA) => {
    console.log(userA.departrment);
    const add = `INSERT INTO department (department_name) VALUES (?)`;
    const place = [userA.departrment];
    db.query(add, place, (err, result) => {
      if (err) {
        console.log('Try Again');
      } else {
        console.log('Nice!');
      }
      userA, (err) => (err ? console.log(err) : console.log('Nice!'));
      question();
    });
  });
};
const newRole = () => {
  role = [
    { type: 'input',
      name: "role",
      message: 'What role would you like to add?',
    },
    { type: 'number',
      name: 'salary',
      message: 'What would you like to salary to be set at?',
    },
    { type: 'list',
      name: 'department',
      message: '1:Engineering or 2:Project Management',
      choices: ['1','2'],
    },
  ];
  inquirer.prompt(role).then((userA) => {
    const add = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    const place = [userA.role, userA.salary, userA.department];
    db.query(add, place, (err, result) => {
      if (err) {
        console.log('Try Again');
      } else {
        console.log('Nice!');
      }
      userA, (err) => (err ? console.log(err) : console.log("Nice!"));
      question();
    });
  });
};
const newEmployee = () => {
  employee = [
    { type: 'input',
      name: 'firstName',
      message: 'New employees first name?',
    },
    { type: 'input',
      name: 'lastName',
      message: 'New employees last name?',
    },
    { type: 'list',
      name: 'role_Id',
      message:'1:Senior Dev 2:Junior Dev 3:UX/UI Designer 4:IT',
      choices: ['1', '2', '3', '4',],
    },
    { type: 'list',
      name: 'manager_Id',
      message: 'Whats your new employees manager ID?',
      choices: ['001', '002',],
    },
  ];
  inquirer.prompt(employee).then((userA) => {
    const add = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    const place = [
      userA.firstName,
      userA.lastName,
      userA.role_Id,
      userA.manager_Id,
    ];
    db.query(add, place, (err, result) => {
      if (err) {
        console.log('Try Again!');
      } else { console.log('Nice!'); }
      userA, (err) => (err ? console.log(err) : console.log('Nice!'));
      question();
    });
  });
};

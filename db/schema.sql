DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  department_name VARCHAR(30) NOT NUlL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NUlL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name TEXT NOT NUlL,
  last_name TEXT NOT NUlL,
  role_id INT,
  manager_id INT NULL,
  FOREIGN KEY (role_id)
  REFERENCES roles(id) 
  ON DELETE SET NULL
);
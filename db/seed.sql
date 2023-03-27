INSERT INTO department (department_name)
VALUES ('Engineering'),
('Project Management');

INSERT INTO roles (title, salary, department_id)
VALUES ('Senior Dev', 180000, 1),
('Junior Dev', 75000, 1),
('UX/UI Designer', 75000, 2),
('IT', 100000, 2);

 INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Stan', 'Smith', 1, 0001),
('Jill', 'Tomas', 2, 0001),
('Kevin', 'Elliot', 3, 0002),
('Becca', 'White', 4, 0002); 

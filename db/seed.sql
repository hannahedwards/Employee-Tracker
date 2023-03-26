INSERT INTO department (department_name)
VALUES ('Engineering'),
('Project Management');

INSERT INTO roles (title, salary, department_id)
VALUES ('Senior Dev', 180000, 012),
('Junior Dev', 75000, 012),
('UX/UI Designer', 75000, 023),
('IT', 100000, 023);

 INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Stan', 'Smith', 321, 123),
('Jill', 'Tomas', 432, 123),
('Kevin', 'Elliot', 543, 456),
('Becca', 'White', 654, 456); 
-- create new department
-- INSERT INTO department (name)
-- VALUES
--     ('Test Department');

-- create new role
-- INSERT INTO role (title, salary, department_id)
-- VALUES ('Luchador', 95000, 8);

-- create new Employee
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ('Hoopsy', 'Blimdo', 17, 3);

-- Update employee role
-- UPDATE employee
-- SET role_id = 1
-- WHERE id = 22;

-- Update Employee Manager
-- UPDATE employee
-- SET manager_id = 1
-- WHERE id = 25;

-- view employees by manager
SELECT * FROM employee WHERE manager_id = 18;
const promiseDb = require('../db/connection');

//-----------DEPARTMENTS--------------------------------------------------------------

//returns all departments, use [0] on the result to get the array
async function getDepartments() {
    const db = await promiseDb;
    const sql = `SELECT * FROM department`;
    const result = await db.query(sql);
    return result[0];
}

//returns a single department with the given id, use [0][0] on the result to get the individual department obj
async function getDepartmentById(id) {
    const db = await promiseDb;
    const sql = `SELECT * FROM department WHERE id = ?`;
    const result = await db.query(sql, id);
    return result[0][0];
}

//adds a department, use [0] on result to get the response object
async function newDepartment(name) {
    const db = await promiseDb;
    const sql = `INSERT INTO department (name) VALUES (?);`
    const result = await db.query(sql, name);
    return result[0];
}


//-----------ROLES--------------------------------------------------------------

//returns all roles, use [0] on the result to get the array
async function getRoles() {
    const db = await promiseDb;
    const sql = `SELECT * FROM role`;
    const result = await db.query(sql);
    return result[0];
}

//returns a single role with the given id, use [0][0] on the result to get the individual department obj
async function getRoleById(id) {
    const db = await promiseDb;
    const sql = `SELECT * FROM role WHERE id = ?`;
    const result = await db.query(sql, id);
    return result[0][0];
}

//creates new role
async function newRole(title, salary, department_id) {
    const db = await promiseDb;
    const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?, ?, ?)`
    const result = await db.query(sql, [title, salary, department_id]);
    return result[0];
}

//-----------EMPLOYEES--------------------------------------------------------------

//returns all employees, use [0] on the result to get the array
async function getEmployees() {
    const db = await promiseDb;
    const sql = `SELECT * FROM employee`;
    const result = await db.query(sql);
    return result[0];
}

//returns a single employee with the given id, use [0][0] on the result to get the individual department obj
async function getEmployeeById(id) {
    const db = await promiseDb;
    const sql = `SELECT * FROM employee WHERE id = ?`;
    const result = await db.query(sql, id);
    return result[0][0];
}

//creates new employee
async function newEmployee(first_name, last_name, role_id, manager_id) {
    const db = await promiseDb;
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;
    const result = await db.query(sql, [first_name, last_name, role_id, manager_id]);
    return result[0];
}

//update employee role
async function updateRole(role_id, id) {
    const db = await promiseDb;
    const sql = `UPDATE employee
    SET role_id = ?
    WHERE id = ?`;
    const result = await db.query(sql, [role_id, id]);
    return result[0];
}



module.exports = { 
    getDepartments, 
    getDepartmentById, 
    getRoles,
    getRoleById,
    getEmployees,
    getEmployeeById,
    newDepartment,
    newRole,
    newEmployee,
    updateRole
};
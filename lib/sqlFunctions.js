const promiseDb = require('../db/connection');

//-----------DEPARTMENTS--------------------------------------------------------------

//returns all departments, use [0] on the result to get the array
async function getDepartments() {
    const db = await promiseDb;
    const sql = `SELECT * FROM department`;
    const result = await db.query(sql);
    return result;
}

//returns a single department with the given id, use [0][0] on the result to get the individual department obj
async function getDepartmentById(id) {
    const db = await promiseDb;
    const sql = `SELECT * FROM department WHERE id = ?`;
    const result = (await db).query(sql, id);
    return result;
}


//-----------ROLES--------------------------------------------------------------

//returns all roles, use [0] on the result to get the array
async function getRoles() {
    const db = await promiseDb;
    const sql = `SELECT * FROM role`;
    const result = await db.query(sql);
    return result;
}

//returns a single role with the given id, use [0][0] on the result to get the individual department obj
async function getRoleById(id) {
    const db = await promiseDb;
    const sql = `SELECT * FROM role WHERE id = ?`;
    const result = (await db).query(sql, id);
    return result;
}

//-----------EMPLOYEES--------------------------------------------------------------

//returns all employees, use [0] on the result to get the array
async function getEmployees() {
    const db = await promiseDb;
    const sql = `SELECT * FROM employee`;
    const result = await db.query(sql);
    return result;
}

//returns a single employee with the given id, use [0][0] on the result to get the individual department obj
async function getEmployeeById(id) {
    const db = await promiseDb;
    const sql = `SELECT * FROM employee WHERE id = ?`;
    const result = (await db).query(sql, id);
    return result;
}

module.exports = { 
    getDepartments, 
    getDepartmentById, 
    getRoles,
    getRoleById,
    getEmployees,
    getEmployeeById
};
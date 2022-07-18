const db = require('../db/connection');

async function getDepartments() {
    const sql = `SELECT * FROM department`;
    let result = (await db).query(sql);
    return result;
}

async function getDepartmentById(id) {
    const sql = `SELECT * FROM department WHERE id = ?`;
    return (await db).query(sql, id);
}
   

module.exports = { getDepartments, getDepartmentById };
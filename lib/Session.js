const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');
const { 
    getDepartments, 
    getDepartmentById, 
    getRoles,
    getRoleById,
    getEmployees,
    getEmployeeById,
    newDepartment
} = require('./sqlFunctions');

class Session {

    async initializeSession(){
        console.log('Session Started.');
        //-----------TESTS------------------------
        // let departments = await getDepartments();
        // console.log("All Departments", departments[0]);
        // let departmentById = await getDepartmentById(3);
        // console.log("Department with ID 3: ", departmentById[0][0]);
        // let roles = await getRoles();
        // console.log("All Roles", roles[0]);
        // let role = await getRoleById(3);
        // console.log("Role with ID: 3 ", role[0][0]);
        // let employees = await getEmployees();
        // console.log("All Employees ", employees[0]);
        // let employee = await getEmployeeById(22);
        // console.log("Employee with ID: 22 ", employee[0][0]);
        // let testDepartment = await newDepartment('Pencillers');
        // console.log("New Department Created: ",testDepartment[0]);
    }

}

module.exports = Session;
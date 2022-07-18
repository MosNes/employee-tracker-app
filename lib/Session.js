const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');
const SQLFunctions = require('./SQLFunctions')

class Session {

    async initializeSession(){
        console.log('Session Started.');
        const db = new SQLFunctions;
        //-----------TESTS------------------------
        // let departments = await getDepartments();
        // console.log("All Departments", departments);
        // let departmentById = await getDepartmentById(3);
        // console.log("Department with ID 3: ", departmentById);
        // let roles = await getRoles();
        // console.log("All Roles", roles);
        // let role = await getRoleById(3);
        // console.log("Role with ID: 3 ", role);
        // let employees = await getEmployees();
        // console.log("All Employees ", employees);
        // let employee = await getEmployeeById(22);
        // console.log("Employee with ID: 22 ", employee);
        // let testDepartment = await newDepartment('Pencillers');
        // console.log("New Department Created: ",testDepartment);
        // let testRole = await newRole('Pineapple Wrangler',75000,4);
        // console.log(testRole);
        // let testEmployee = await newEmployee('Yarbm','Flanksteak',2,18);
        // console.log(testEmployee);
        // let updatedRole = await updateRole(6, 4);
        // console.log(updatedRole);
        // let updatedManager = await updateManager(6, 25);
        // console.log(updatedManager);
        // let employees = await getEmployeesByManager(18);
        // console.log(employees);
        // let employees = await db.getEmployeesByDepartment(1);
        // console.log(employees);
    }

}

module.exports = Session;
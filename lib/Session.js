const inquirer = require('inquirer');
const cTable = require('console.table');

const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');
const SQLFunctions = require('./SQLFunctions');
const db = require('../db/connection');
const Database = new SQLFunctions;

class Session {

    constructor() {
        //list of all main menu options
        this.menuOptions = [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'View Employees by Manager',
            'View Employees by Department',
            'View Department Budget',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Update an Employee Manager',
            'Delete Department',
            'Delete Role',
            'Delete Employee',
            'Exit.'
        ]
    }

    //runs at Session start
    async initializeSession() {
        console.log('Session Started.');
        console.log('Welcome to the Employee Tracker App')
        this.mainMenu();

    }

    //displays all main menu options to the user and handles the selection.
    async mainMenu() {
        console.log("Main Menu");

        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: this.menuOptions
            })
            .then(async ({ choice }) => {
                if (choice === 'View All Departments') {

                    const result = await Database.getDepartments();
                    console.table(result);
                    this.confirmContinue();

                } else if (choice === 'View All Roles') {

                    const result = await Database.getRoles();
                    console.table(result);
                    this.confirmContinue();

                } else if (choice === 'View All Employees') {

                    const result = await Database.getEmployees();
                    console.table(result);
                    this.confirmContinue();

                } else if (choice === 'View Employees by Manager') {

                    inquirer
                        .prompt({
                            type: 'number',
                            name: 'managerId',
                            message: "Please enter the Manager's ID."
                        })
                        .then(async ({ managerId }) => {
                            const result = await Database.getEmployeesByManager(managerId);
                            if (result[0]) {
                                console.table(result);
                            } else {
                                console.log(`Employee ID ${managerId} has no direct reports.`)
                            }

                            this.confirmContinue();
                        });

                } else if (choice === 'View Employees by Department') {

                    inquirer
                        .prompt({
                            type: 'number',
                            name: 'departmentId',
                            message: "Please enter the Department's ID."
                        })
                        .then(async ({ departmentId }) => {
                            const result = await Database.getEmployeesByDepartment(departmentId);
                            if (result[0]) {
                                console.table(result);
                            } else {
                                console.log(`Department ID ${departmentId} does not exist.`)
                            }

                            this.confirmContinue();
                        });

                } else if (choice === 'View Department Budget') {

                    inquirer
                        .prompt({
                            type: 'number',
                            name: 'departmentId',
                            message: "Please enter the Department's ID."
                        })
                        .then(async ({ departmentId }) => {
                            const result = await Database.getBudget(departmentId);
                            if (result[0]) {
                                console.table(result);
                            } else {
                                console.log(`Department ID ${departmentId} does not exist.`)
                            }

                            this.confirmContinue();
                        });

                } else if (choice === 'Add a Department') {

                    inquirer
                        .prompt({
                            type: 'text',
                            name: 'departmentName',
                            message: "Please enter the name of the new Department."
                        })
                        .then(async ({ departmentName }) => {
                            if (!departmentName) {
                                console.log("Invalid Input.")
                                this.confirmContinue();
                            } else {

                                const result = await Database.newDepartment(departmentName);
                                if (result.affectedRows === 1) {
                                    console.log(`Department ${departmentName} created with ID ${result.insertId}`);
                                } else {
                                    console.log('Invalid Input');
                                }

                                this.confirmContinue();

                            }
                        });

                } else if (choice === 'Add a Role') {

                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'title',
                                message: "Please enter the title of the new Role."
                            },
                            {
                                type: 'number',
                                name: 'salary',
                                message: 'Please enter the annual salary of the new Role (Max 7 digits).'
                            },
                            {
                                type: 'number',
                                name: 'departmentId',
                                message: 'Please enter the ID for the Department of the New Role.'
                            }
                        ])
                        .then(async ({ title, salary, departmentId }) => {
                            if (!title || !salary || !departmentId) {
                                console.log("Invalid Input.")
                                this.confirmContinue();
                            } else {
                                const result = await Database.newRole(title, salary, departmentId);
                                if (result.affectedRows === 1) {
                                    console.log(`Role: ${title} created with ID ${result.insertId}`);
                                } else {
                                    console.log('Invalid Input');
                                }

                                this.confirmContinue();
                            }
                        });

                } else if (choice === 'Add an Employee') {

                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'firstName',
                                message: "Please enter the Employee's first name."
                            },
                            {
                                type: 'text',
                                name: 'lastName',
                                message: "Please enter the Employee's last name."
                            },
                            {
                                type: 'number',
                                name: 'roleId',
                                message: "Please enter the ID for the Employee's role."
                            },
                            {
                                type: 'confirm',
                                name: 'hasManager',
                                message: "Does the Employee report to a Manager?"
                            },
                            //Only asked if the user answers Y to the previous question
                            {
                                when: ({ hasManager }) => {
                                    if (hasManager) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                },
                                type: 'number',
                                name: 'managerId',
                                message: "Please enter the ID for the Employee's Manager."
                            }
                        ])
                        .then(async ({ firstName, lastName, roleId, hasManager, managerId }) => {
                            if (!firstName || !lastName || !roleId) {
                                console.log("Invalid Input.")
                                this.confirmContinue();
                            } else if (hasManager && !managerId) {
                                console.log("No valid Manager ID was entered.")
                            } else {
                                const result = await Database.newEmployee(firstName, lastName, roleId, managerId);
                                if (result.affectedRows === 1) {
                                    console.log(`Employee: ${firstName} ${lastName} created with ID ${result.insertId}`);
                                } else {
                                    console.log('Invalid Input');
                                }

                                this.confirmContinue();
                            }
                        });

                } else if (choice === 'Update an Employee Role') {

                    inquirer
                        .prompt([
                            {
                                type: 'number',
                                name: 'employeeId',
                                message: "Please enter the ID of the Employee you wish to update."
                            },
                            {
                                type: 'number',
                                name: 'roleId',
                                message: "Please enter the ID of their new Role."
                            },
                        ])
                        .then(async ({ employeeId, roleId }) => {
                            if (!employeeId || !roleId) {
                                console.log("Invalid Input.")
                                this.confirmContinue();
                            } else {

                                const result = await Database.updateRole(roleId, employeeId);
                                if (result.changedRows === 1) {
                                    console.log(`Employee ID: ${employeeId} has been assigned Role ID: ${roleId}`);
                                } else {
                                    console.log('Invalid Input');
                                }

                                this.confirmContinue();

                            }
                        });

                } else if (choice === 'Update an Employee Manager') {

                    inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'employeeId',
                            message: "Please enter the ID of the Employee you wish to update."
                        },
                        {
                            type: 'confirm',
                            name: 'hasManager',
                            message: "Does the Employee report to a Manager?"
                        },
                        //Only asked if the user answers Y to the previous question
                        {
                            when: ({ hasManager }) => {
                                if (hasManager) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            type: 'number',
                            name: 'managerId',
                            message: "Please enter the ID for the Employee's Manager."
                        }
                    ])
                    .then(async ({ employeeId, hasManager, managerId }) => {
                        if (!employeeId) {
                            console.log("Invalid Input.")
                            this.confirmContinue();
                        } else if (hasManager && !managerId) {
                            console.log("No valid Manager ID was entered.")
                        } else {

                            const result = await Database.updateManager(managerId, employeeId);
                            if (result.changedRows === 1) {
                                if (!managerId) {
                                    console.log(`Employee ID: ${employeeId} is now a Top Manager.`);
                                } else {
                                    console.log(`Employee ID: ${employeeId} has been assigned Manager ID: ${managerId}`);
                                }
                                
                            } else {
                                console.log('Invalid Input');
                            }

                            this.confirmContinue();

                        }
                    });

                } else if (choice === 'Delete Department') {

                } else if (choice === 'Delete Role') {

                } else if (choice === 'Delete Employee') {

                } else {
                    this.endSession();
                }
            });
    }

    //prompts user if they want to continue after completing an operation
    async confirmContinue() {
        inquirer
            .prompt({
                type: 'confirm',
                message: 'Would you like to do something else?',
                name: 'confirmChoice',
                default: true
            })
            .then(({ confirmChoice }) => {
                if (confirmChoice) {
                    this.mainMenu();
                } else {
                    this.endSession();
                }
            })
    }

    //exits the program
    async endSession() {
        console.log("Bye!");
        process.exit();
    }

}

module.exports = Session;
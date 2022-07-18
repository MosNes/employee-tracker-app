const inquirer = require('inquirer');

const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');
const SQLFunctions = require('./SQLFunctions')

class Session {

    constructor () {
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
    ]
    }

    async initializeSession(){
        console.log('Session Started.');
        const db = new SQLFunctions;
        
    }

    async endSession(){
        console.log("Bye!");
    }

}

module.exports = Session;
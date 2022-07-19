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
            'Delete Department',
            'Delete Role',
            'Delete Employee',
            'Exit.'
    ]
    }

    async initializeSession(){
        console.log('Session Started.');
        console.log('Welcome to the Employee Tracker App')
        const db = new SQLFunctions;
        this.mainMenu();
        
    }

    async mainMenu(){
        console.log("Main Menu");

        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: this.menuOptions
            })
            .then(( {choice} ) => {
                if (choice === 'View All Departments') {
                    
                    console.log("YOU CHOSE THE FIRST CHOICE!")
                    this.confirmContinue();

                } else if (choice === 'View All Roles') {

                } else if (choice === 'View All Employees') {
                    
                } else if (choice === 'View Employees by Manager') {
                    
                } else if (choice === 'View Employees by Department') {
                    
                } else if (choice === 'View Department Budget') {
                    
                } else if (choice === 'Add a Department') {
                    
                } else if (choice === 'Add a Role') {
                    
                } else if (choice === 'Add an Employee') {
                    
                } else if (choice === 'Update an Employee Role') {
                    
                } else if (choice === 'Update an Employee Manager') {
                    
                } else if (choice === 'Delete Department') {
                    
                } else if (choice === 'Delete Role') {
                    
                } else if (choice === 'Delete Employee') {
                    
                } else {
                    this.endSession();
                }
            });
    }

    async confirmContinue() {
        inquirer
            .prompt({ 
                type: 'confirm',
                message: 'Would you like to do something else?',
                name: 'confirmChoice',
                default: true
            })
            .then (({confirmChoice}) => {
                if (confirmChoice) {
                    this.mainMenu();
                } else {
                    this.endSession();
                }
            })
    }

    async endSession(){
        console.log("Bye!");
        process.exit();
    }

}

module.exports = Session;
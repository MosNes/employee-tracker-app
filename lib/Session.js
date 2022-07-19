const inquirer = require('inquirer');
const cTable = require('console.table');

const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');
const SQLFunctions = require('./SQLFunctions');
const db = require('../db/connection');
const Database = new SQLFunctions;

class Session {

    constructor () {
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
    async initializeSession(){
        console.log('Session Started.');
        console.log('Welcome to the Employee Tracker App')
        this.mainMenu();
        
    }

    //displays all main menu options to the user and handles the selection.
    async mainMenu(){
        console.log("Main Menu");

        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: this.menuOptions
            })
            .then( async ( {choice} ) => {
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

    //prompts user if they want to continue after completing an operation
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

    //exits the program
    async endSession(){
        console.log("Bye!");
        process.exit();
    }

}

module.exports = Session;
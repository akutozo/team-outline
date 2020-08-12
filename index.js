const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generate_html = require('./src/html_buildout');

let staffAray = [];

//Let's begin
const start_application = () => {
    console.log("Welcome. Please put together your teams information. Let's start with your manager.");
    return inquirer.prompt(manager);

};

const manager = [
    {
        type: 'input',
        name: 'manager',
        message: "Provide your managers name:",
        validate: manager => {
            if(manager) {
                return true;
            } else {
                console.log("Error: Your manager was given a name at their date of birth. Please share it!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'mgrId',
        message: "Provide their identification number for tracking purposes.",
        validate: mgrId => {
            if (mgrId > 0) {
                return true;
            } else {
                console.log("The manager must be tracked. For reasons.");
                return false;
            }
        
        }
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: "Please provide an email address for this manager.",
        validate: mgrEmail => {
            if (mgrEmail) {
                return true;
            } else {
                console.log("Error: Email address not found.");
                return false;
            }
        }
    }
]

const employee = () => {
    console.log("Employee is running. Better catch them!")
};

start_application()
.then(employee);
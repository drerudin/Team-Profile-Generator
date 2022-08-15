const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('../lib/Employee')
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const pageTemplate = require('./dist/page-template');
const generateTeam = require("./dist/page-template")
const writeFile = require("./src/generate-site")



inquirer
    .prompt({
        type: 'list',
        message: "What is your role?",
        name: 'role',
        choices: ['Engineer', 'Intern', 'I dont have any more employees']
    },
    )
    .then ((userChoice) => {
        switch (userChoice.role){
            case "Engineer":
                addEngineer()
                break
            case "Intern":
                addIntern()
                break
            default:
        }
    });

inquirer
    .prompt({
        type: 'input',
        message: "What is your managers name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is your managers employee ID?',
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is your managers email?",
        name: 'managerEmail',
        validate: {
            isEmail: true
        }

        },
    
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'officeNumber'
    })

    .then ((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail
        )
        teamMembers.push(manager)
        idArray.push(answers.managerId)
        createTeam()
    })


    


const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const pageTemplate = require('./src/page-template');
const generateTeam = require("./src/page-template");
const writeFile = require("./src/generate-site");
const team = [];
const idArray = [];


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
                new Engineer()
                break
            case "Intern":
                new Intern()
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
    },
    {
        type: 'input',
        message: "What school did you finish?",
        name: 'school'
    }
    )

    .then ((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail
        )
        team.push(manager)
        idArray.push(answers.managerId)
        createTeam()
    })


    


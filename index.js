const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const pageTemplate = require('./src/page-template');
const generateTeam = require("./src/page-template");
const writeFile = require("./src/generate-site");
const team = [];

function createTeam() {
    inquirer
    .prompt({
        type: 'list',
        message: "What is your role?",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager', 'I dont have any more employees']
    },
    )
    .then ((userChoice) => {
        switch (userChoice.role){
            case "Engineer":
                createEngineer(userChoice)
                break
            case "Intern":
               createIntern(userChoice)
                break
            case "Manager":
                createManager(userChoice)

            default:
                const htmlData = generateTeam(team);
                writeFile(htmlData);
                // TODO: Build out the output with all the engineers, interns, and managers
        }
    });
}

function createEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'name',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            message: "What is your engineer's ID?",
            name: 'id',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: 'email',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please submit a valid email."
            }
        },
        {
            type: 'input',
            message: "What is your engineer's github tag?",
            name: 'github',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please submit a valid github name."
            }
        }
    ],
    )
    .then ((userChoice) => {
       // TODO: Create Engineer

       const newEngineer = new Engineer(userChoice)
       team.push(newEngineer)

       createTeam();
    });
}

function createIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'name',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            message: "What is your intern's ID?",
            name: 'id',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please enter at least one character"
            }
        },
        {
            type: 'input',
            message: "What is your intern's email?",
            name: 'email',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please submit a valid email."
            }
        },
        {
            type: 'input',
            message: "What is your intern's school?",
            name: 'school',
            validate: function(value) {
                if (value !== "") {
                    return true;
                }

                return "Please submit a valid school name."
            }
        }
    ],
    )
    .then ((userChoice) => {
       // TODO: Create Intern

       const newIntern = new Intern(userChoice)
       team.push(newIntern)

       createTeam();
    });
}

function createManager() {
    inquirer
    .prompt([
        
    {
        type: 'input',
        message: "What is your managers name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your managers employee ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: "What is your managers email?",
        name: 'email',
        validate: function(value) {
            if (value !== "") {
                return true;
            }
        }
        },    
    {
        type: 'input',
        message: "What is your manager's office number?",
        name: 'officeNumber'
    }]
    )

    .then ((userChoice) => {
        // TODO: Create Engineer
 
        const newManager = new Manager(userChoice)
        team.push(newManager)

        createTeam()
    })
}

createTeam();
module.exports = team;
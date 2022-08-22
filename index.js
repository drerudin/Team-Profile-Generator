const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateTeam = require("./src/page-template");
const writeFile = require("./src/generate-site");
const team = [];

// function to build the team array

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
        }
    });
}

// function to create the engineer object

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

       const newEngineer = new Engineer(userChoice.name, userChoice.id, userChoice.email, userChoice.github)
       team.push(newEngineer)

       createTeam();
    });
}

// function to create the intern object

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

       const newIntern = new Intern(userChoice.name, userChoice.id, userChoice.email, userChoice.school)
       team.push(newIntern)

       createTeam();
    });
}

// function to create the manager object

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
 
        const newManager = new Manager(userChoice.name, userChoice.id, userChoice.email, userChoice.officeNumber)
        team.push(newManager)

        createTeam()
    })
}

createTeam();
module.exports = team;
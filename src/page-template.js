const inquirer = require("inquirer");
const fs = require("fs");
const team = require("../index");
const manager = require("../lib/Manager");
const engineer = require("../lib/Engineer");
const intern = require("../lib/Intern");


// generate the team using the team array
const generateTeam = (team) => {

    // generate manager html
  const generateManager = (manager) => {
    return `
        <div card class="card" style="width: 18rem; padding: 20px;">
            <div class="card-header text-bg-primary">
                <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item"> ID : ${manager.getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item"> Office #: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        `;
  };

  // generate engineer html
  const generateEngineer = (engineer) => {
    return `
        <div card class="card" style="width: 18rem; padding: 20px;">
            <div class="card-header text-bg-primary">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">ID : ${engineer.getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item"> Github Account: <a href="github.com/${engineer.getGithub()}">github.com/${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
  };

  // generate intern html
  const generateIntern = (intern) => {
    return `
        <div card class="card" style="width: 18rem; padding: 20px;">
        <div class="card-header text-bg-primary">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">ID : ${intern.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item"> School Name: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
  };
// loop through the team array and generate html for each team member
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return html.join("");
};

// template for the base html file
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://kit.fontawesome.com/483ad4a6ce.js" crossorigin="anonymous"></script>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </head>
    <body>
        <h1 class="text-center bg-danger" style="padding:20px;">My Team</h1>
        <div class="container">
            <div class="row" style="justify-content: space-between;">
                ${generateTeam(team)}
            </div>
        </div>
    </body>
    </html> `;
};

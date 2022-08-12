const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div card "employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class-"card-title"><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
            </div>
            <div>
                <ul class=list-group">
                    <li class="list-group-item">ID : ${manager.getID()}</li>
                    <li class="list-group-item"> Email: <a ref="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item"> Office #: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
    }
    const generateEngineer = engineer => {
        return `
        <div card "employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class-"card-title"><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</h3>
            </div>
            <div>
                <ul class=list-group">
                    <li class="list-group-item">ID : ${engineer.getID()}</li>
                    <li class="list-group-item"> Email: <a ref="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item"> Office #: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
        `
    }
    const generateIntern = intern => {
        return `
        <div card "employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class-"card-title"><<i class="fa-solid fa-user-graduate">></i>${intern.getRole()}</h3>
        </div>
        <div>
            <ul class=list-group">
                <li class="list-group-item">ID : ${intern.getID()}</li>
                <li class="list-group-item"> Email: <a ref="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item"> Office #: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `
    }

    const html =[]
    html.push(team
        .filter(employee =>employee.getRole() ==="Manager")
        .map(manager => generateManager(manager))
    )
    html.push(team
        .filter(employee =>employee.getRole() ==="Engineer")
        .map(engineer => generateEngineer(engineer))
    )
    html.push(team
        .filter(employee =>employee.getRole() ==="Intern")
        .map(intern => generateIntern(intern))
    )
    return html.join("")

}
module.exports =team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 class="text-center">My Team</h1>
    <div class="container">
        <div class="row">
            ${generateTeam(team)}
        </div>
    </div>
</body>
</html> `
}


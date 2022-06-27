const Employee = require('../lib/Employee')

test('Creates an employee class', () => {
const employee = new Employee();

expect(employee.name).toBe('John');
expect(employee.id).toBe('Intern');
expect(employee.Email).toEqual(expect.arrayContaining([expect.any(Object)]));

})

test('Checks for the name', () => {
    const employee = new Employee('John');

    expect(employee.getName).toEqual(expect.arrayContaining([expect.any(Object)]));

})


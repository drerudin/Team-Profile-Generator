const Employee = require('../lib/Employee')

test('Creates an employee class', () => {
const e = new Employee('John', 'Intern', 'john@gmail.com')
expect(typeof(e)).toBe("object")
expect(e.name).toBe('John');
expect(e.id).toBe('Intern');
expect(e.email).toBe('john@gmail.com');

})

test('Checks for the name', () => {
    const e = new Employee("John");

    expect(e.name).toBe("John");

})


const Manager = require("../lib/Manager");

test("Gets the managers name", () => {
    const testValue = "Foo";
    const e = new Manager("Foo", 1, "test@test.com", "555-555-5555");
    expect(e.getName()).toBe(testValue);
});

test("Gets the managers email", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, "test@test.com", "555-555-5555");
    expect(e.getEmail()).toBe(testValue);
});

test("Gets the managers office number", () => {
    const testValue = "555-555-5555";
    const e = new Manager("Foo", 1, "test@test.com", "555-555-5555");
    expect(e.getOfficeNumber()).toBe(testValue);
});
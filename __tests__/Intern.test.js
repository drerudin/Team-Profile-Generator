const Intern = require("../lib/Intern");

test("Can set school via Constructor", () => {
    const testValue = "MIT";
    const e = new Intern("Foo", 1, "test@test.com", "MIT");
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Gets the interns name", () => {
    const testValue = "Foo";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.name).toBe(testValue);
});
test("Gets the interns Email", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.email).toBe(testValue);
});
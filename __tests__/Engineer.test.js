const Engineer = require("../lib/Engineer");

test("Gets the employee name", () => {
    const testValue = "Foo";
    const e = new Engineer("Foo", 1, "test@test.com", "Foobar");
    expect(e.name).toBe(testValue);
});

test("Gets the engineer role", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "Foobar");
    expect(e.getRole()).toBe(testValue);
});

test("Gets the engineers email", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, "test@test.com", "Foobar");
    expect(e.getEmail()).toBe(testValue);
})

test("Can get GitHub username via getGithub()", () => {
    const testValue = "Foobar";
    const e = new Engineer("Foo", 1, "test@test.com", "Foobar");
    expect(e.getGithub()).toBe(testValue);
});
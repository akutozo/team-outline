const Engineer = require('../lib/Engineer.js');

test("Engineers Github profile", () => {
    const testValue = "akutozo";
    const employee = new Engineer("Al Yankovic", 1337, "whiteandnerdy@thechamp.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("Setting the role to Engineer", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Al Yankovic", 1337, "whiteandnerdy@thechamp.com", testValue);
    expect(employee.empRole()).toBe(testValue);
})

test("Grabbing that github profile", () => {
    const testValue = "akutozo";
    const employee = new Engineer("Al Yankovic", 1337, "whiteandnerdy@thechamp.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})
const Intern = require("../lib/Intern");

test("What School is providing us the sacrifice?", () => {
    const testValue = "Pennsylvania State University";
    const employee = new Intern("Faleolo Alailima", 1001, "intern4@thechamp.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Faleolo Alailima", 1001, "intern4@thechamp.com", testValue);
    expect(employee.empRole()).toBe(testValue);
})

test("Verifying the interns school", () => {
    const testValue = "Pennsylvania State University";
    const employee = new Intern("Faleolo Alailima", 1001, "intern4@thechamp.com", testValue);
    expect(employee.intSchool()).toBe(testValue);
});
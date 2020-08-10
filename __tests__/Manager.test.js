const Manager = require('../lib/Manager.js');

//Test 1
test("setting office number", () => {
    const testValue = "100";
    const employee = new Manager("Cus C'Amato", 2, "makinmoneyfor@thechamp.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
})

//Test 2
test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Cus C'Amato", 2, "makinmoneyfor@thechamp.com", 100);
    expect(employee.empRole()).toBe(testValue);
})
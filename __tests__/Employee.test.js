const Employee = require('../lib/Employee.js');


//Test 1
test('Contruct Employee Profile', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

//Test 2
test('Establish Employees Name', () => {
    const name = "Mike Tyson"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

//Test 3
test('Identification, Please', () => {
    const testId = 1;
    const employee = new Employee("Mike Tyson", testId);
    expect(employee.id).toBe(testId);
});

//Test 4
test('Email Address', () => {
    const testEmail = "miketyson@thechamp.com"
    const employee = new Employee("Mike Tyson", 1, testEmail);
    expect(employee.empEmail()).toBe(testEmail);
});

//Test 5
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Mike Tyson", 1, "miketyson@thechamp.com");
    expect(employee.empRole()).toBe(testRole);
});
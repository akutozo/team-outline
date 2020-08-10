class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    empName() {
        return this.name;
    }
    empId() {
        return this.id;
    }
    empEmail() {
        return this.email;
    }
    empRole() {
        return this.title;
    }

}

module.exports = Employee;
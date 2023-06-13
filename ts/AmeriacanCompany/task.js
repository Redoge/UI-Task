var Frontend = /** @class */ (function () {
    function Frontend(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Frontend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Frontend.prototype.getName = function () {
        return this.name;
    };
    return Frontend;
}());
var Backend = /** @class */ (function () {
    function Backend(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Backend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Backend.prototype.getName = function () {
        return this.name;
    };
    return Backend;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectList = function () {
        return this.employees.map(function (employee) { return employee.getCurrentProject(); });
    };
    Company.prototype.getNameList = function () {
        return this.employees.map(function (employee) { return employee.getName(); });
    };
    return Company;
}());
var company = new Company();
var employee1 = new Frontend("Employee1", "Project A");
var employee2 = new Frontend("Employee2", "Project B");
var employee3 = new Backend("Employee3", "Project C");
company.add(employee1);
company.add(employee2);
company.add(employee3);
console.log("Project List:", company.getProjectList());
console.log("Name List:", company.getNameList());
